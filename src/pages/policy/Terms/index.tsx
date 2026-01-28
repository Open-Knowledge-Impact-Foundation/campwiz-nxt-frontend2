import Footer from "@/components/home/Footer";
import { useTranslation } from "@root/i18n/client";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const TermsOfService = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
                <div className="container mx-auto px-4 text-left">
                    <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-200">{t('terms.title')}</h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8"><strong>{t('terms.effectiveDate')}</strong> April 4, 2025</p>

                    <section className="mb-8">
                        <p className="mb-4 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t('terms.intro') }} />
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.eligibility.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            {t('terms.eligibility.content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.acceptableUse.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                            {t('terms.acceptableUse.intro')}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>{t('terms.acceptableUse.fraudulent')}</li>
                            <li>{t('terms.acceptableUse.exploiting')}</li>
                            <li>{t('terms.acceptableUse.unauthorized')}</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.userData.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <Trans i18nKey="terms.userData.content">
                                We only collect publicly available Wikimedia usernames and registration dates. Your data is used solely for campaign and jury process functionalities. Refer to our <Link to="/policy/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link> for more information.
                            </Trans>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.monitoring.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                            {t('terms.monitoring.intro')}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>{t('terms.monitoring.campaignCreation')}</li>
                            <li>{t('terms.monitoring.projectRound')}</li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300">
                            {t('terms.monitoring.outro')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.serviceAvailability.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            {t('terms.serviceAvailability.content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.disclaimer.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            {t('terms.disclaimer.content')}
                        </p>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.immunity.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            {t('terms.immunity.content')}
                        </p>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.changes.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            {t('terms.changes.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">{t('terms.contact.title')}</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            <Trans i18nKey="terms.contact.content">
                                If you have any questions about these Terms, contact us at <a href="mailto:support@wikilovesfolklore.org" className="text-blue-500 hover:underline">support@wikilovesfolklore.org</a>.
                            </Trans>
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TermsOfService;
