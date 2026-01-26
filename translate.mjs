import fs from 'fs';
import path from 'path';
const STANDARD_LANG = 'en';
const currentDir = "."
const i18nDir = path.join(currentDir, 'i18n', 'locales');
const locales = fs.readdirSync(i18nDir);
const readTranslationFile = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
}
const mergeTranslations = (standard, translation) => {
    const merged = { ...standard };
    for (const key in translation) {
        if (translation.hasOwnProperty(key)) {
            if (typeof translation[key] === 'object' && !Array.isArray(translation[key])) {
                merged[key] = mergeTranslations(standard[key], translation[key]);
            } else {
                merged[key] = translation[key];
            }
        }
    }
    return merged;
}
const standardFilePath = path.join(i18nDir, STANDARD_LANG, 'translation.json');
if (!fs.existsSync(standardFilePath)) {
    console.error(`Standard translation file not found for locale: ${STANDARD_LANG}`);
    process.exit(1);
}
const standardTranslation = readTranslationFile(standardFilePath);
locales.forEach((locale) => {
    if (locale === STANDARD_LANG) {
        return;
    }
    console.log(`Processing locale: ${locale}`);
    const localePath = path.join(i18nDir, locale);
    const filePath = path.join(localePath, 'translation.json');
    if (fs.existsSync(filePath)) {
        const translation = readTranslationFile(filePath);
        const merged = mergeTranslations(standardTranslation, translation);
        fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
        console.log(`Merged translation for locale: ${locale}`);
    } else {
        console.warn(`Translation file not found for locale: ${locale}`);
        // create a new translation file with the standard language content
        fs.mkdirSync(localePath, { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(standardTranslation, null, 2));
    }
});
