'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import type { FlatNamespace, KeyPrefix } from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import type { UseTranslationOptions, UseTranslationResponse, FallbackNs } from 'react-i18next'
import Cookies from 'js-cookie'
import LanguageDetector from 'i18next-browser-languagedetector'
import getOptions, { languages, cookieName } from './settings'

import type { Language, TranslationNamespace } from '@/types/i18n'

// lightweight dynamic resources loader in place of an external backend
const dynamicResourcesBackend = {
  type: 'backend' as const,
  read: (language: Language, namespace: TranslationNamespace, callback: (err: unknown, data?: unknown) => void) => {
    import(`./locales/${language}/${namespace}.json`)
      .then((m) => callback(null, m.default ?? m))
      .catch((err) => callback(err, false))
  }
}

const runsOnServerSide = typeof window === 'undefined'

// initialize i18next for client side
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(dynamicResourcesBackend)
  .init({
    ...getOptions(),
    lng: undefined, // let the detector decide on client
    detection: {
      order: ['cookie', 'path', 'htmlTag', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
    partialBundledLanguages: true,
    lowerCaseLng: true,
  })

export function useTranslation<Ns extends FlatNamespace, KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined>(
  lng?: string,
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const i18nextCookie = Cookies.get(cookieName)
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  // Always call hooks at top-level to satisfy rules-of-hooks
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

  useEffect(() => {
    if (runsOnServerSide) return
    if (activeLng === i18n.resolvedLanguage) return
    // schedule update to avoid synchronous setState in effect
    Promise.resolve().then(() => setActiveLng(i18n.resolvedLanguage))
  }, [activeLng, i18n.resolvedLanguage])

  useEffect(() => {
    if (runsOnServerSide) return
    if (!lng || i18n.resolvedLanguage === lng) return
    i18n.changeLanguage(lng)
  }, [lng, i18n])

  useEffect(() => {
    if (runsOnServerSide) return
    if (!lng) return
    if (i18nextCookie === lng) return
    Cookies.set(cookieName, lng, { path: '/' })
  }, [lng, i18nextCookie])

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  }

  return ret
}

export const translationLink = 'https://translatewiki.net/wiki/Special:Translate?group=wikimedia-tools-campwiz-frontend&action=translate&filter=!translated&utm_source=CampWizFrontend&utm_campaign=CampWizFrontend&utm_medium=translatewiki&utm_content=CampWizFrontend&utm_term=CampWizFrontend'
