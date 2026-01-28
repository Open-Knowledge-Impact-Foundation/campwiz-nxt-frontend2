import { Link } from "react-router-dom";
import { translationLink, useTranslation } from "@root/i18n/client";

const Footer =  () => {
    const { t } = useTranslation();

    return (
        <footer className="text-center bg-gray-100 w-full h-max p-2 mt-auto bottom-0 mb-1 dark:bg-gray-800 dark:text-gray-200">
            &copy; 2025 by <a  href='https://github.com/nokibsarkar/campwiz?tab=readme-ov-file#credits' target="_blank" className="text-blue-400" rel="noopener noreferrer">{t('footer.campwizNxtTeam')}</a>
            &nbsp; | &nbsp; <a href="https://commons.wikimedia.org/wiki/Commons:Campwiz_NXT" className="text-blue-400" rel="noopener noreferrer">{t('footer.manual')}</a>
            &nbsp; | &nbsp; <Link to="/policy/terms" className="text-blue-400">{t('footer.terms')}</Link>
            &nbsp; | &nbsp; <Link to="/policy/privacy" className="text-blue-400">{t('footer.privacy')}</Link>
            &nbsp; | &nbsp; <a href="https://github.com/nokibsarkar/campwiz/issues/new" target="_blank" className="text-blue-400" rel="noopener noreferrer">{t('footer.reportBug')}</a>
            &nbsp; | &nbsp; <a href={translationLink} target="_blank" className="text-blue-400" rel="noopener noreferrer">{t('footer.translate')}</a>
        </footer>
    );
}
export default Footer;