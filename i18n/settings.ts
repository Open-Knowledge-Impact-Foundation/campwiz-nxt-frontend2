export const fallbackLng = 'en'
export const languages = [
  fallbackLng,
  'ar',
  'bn',
  'cs',
  'de',
  'es',
  'fa',
  'fr',
  'ha',
  'hi',
  'id',
  'it',
  'ja',
  'kcg',
  'kea',
  'kn',
  'ko',
  'krc',
  'lb',
  'lt',
  'mk',
  'ml',
  'mni',
  'mr',
  'nb',
  'nl',
  'or',
  'pa',
  'pms',
  'ps',
  'pt',
  'pt-br',
  'qqq',
  'ru',
  'skr',
  'skr-arab',
  'ta',
  'te',
  'tr',
  'ur',
  'xmf',
  'yi',
  'zh-hans',
  'zh-hant'
]
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export default function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        debug: import.meta.env.DEV,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}