import Footer from "@/components/home/Footer";
import { useTranslation } from "@root/i18n/client";
import { Trans } from "react-i18next";

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
                <div className="container mx-auto  px-4 text-left">
                    <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-200">{t('privacy.title')}</h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8"><strong>{t('privacy.effectiveDate')}</strong> April 15, 2025</p>

                    <section className="mb-8">
                        <p className="mb-4 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t('privacy.intro') }} />
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('privacy.infoWeCollect.title')}</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">{t('privacy.infoWeCollect.intro')}</p>
                        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                            <li><strong>{t('privacy.infoWeCollect.username')}</strong></li>
                            <li><strong>{t('privacy.infoWeCollect.registrationDate')}</strong></li>
                            <li><strong>{t('privacy.infoWeCollect.ipAddress')}</strong></li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300">
                            {t('privacy.infoWeCollect.outro')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('privacy.cookies.title')}</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">{t('privacy.cookies.intro')}</p>
                        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                            <li><strong>{t('privacy.cookies.authentication')}</strong></li>
                            <li><strong>{t('privacy.cookies.authorization')}</strong></li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t('privacy.cookies.outro') }} />
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('privacy.monitoring.title')}</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                            {t('privacy.monitoring.intro')}
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                            <li>{t('privacy.monitoring.campaignCreation')}</li>
                            <li>{t('privacy.monitoring.projectCreation')}</li>
                            <li>{t('privacy.monitoring.roundCreation')}</li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t('privacy.monitoring.outro') }} />
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('privacy.errorMonitoring.title')}</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t('privacy.errorMonitoring.intro') }} />
                        <p className="mb-4 text-gray-700 dark:text-gray-300">{t('privacy.errorMonitoring.dataIntro')}</p>
                        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                            <li><strong>{t('privacy.errorMonitoring.username')}</strong></li>
                            <li><strong>{t('privacy.errorMonitoring.internalId')}</strong></li>
                        </ul>
                        <p className="mb-4 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t('privacy.errorMonitoring.noIp') }} />
                        <p className="text-gray-700 dark:text-gray-300">
                            <Trans i18nKey="privacy.errorMonitoring.learnMore">
                                For more information, please refer to Sentry&trade;'s Privacy Policy: <a href="https://sentry.io/trust/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://sentry.io/trust/privacy/</a>.
                            </Trans>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('privacy.dataSharing.title')}</h2>
                        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                            <li>
                                <Trans i18nKey="privacy.dataSharing.noSell">
                                    We <strong>do not sell, share, or disclose</strong> your account data to any third parties not mentioned in this policy. But we do provide submission results to the appropriate rightholders to use in any way they want with best of our intentions to be <a href="https://en.wikipedia.org/w/index.php?title=Wikipedia:Assume_good_faith&oldid=1278089355" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">good faith</a>.
                                </Trans>
                            </li>
                            <li>{t('privacy.dataSharing.internalUse')}</li>
                            <li>{t('privacy.dataSharing.retention')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('privacy.yourRights.title')}</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                            <Trans i18nKey="privacy.yourRights.content">
                                Because we only use publicly available and minimal information, we do not store sensitive personal data. If you have any questions or concerns about your data or privacy, please contact us at <a href="mailto:support@wikilovesfolklore.org" className="text-blue-500 hover:underline">support@wikilovesfolklore.org</a>.
                            </Trans>
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyPolicy;
