import { translationLink, useTranslation } from "@root/i18n/client";
import { cookieName, languages } from "@root/i18n/settings";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";
import ThemeSwitcherButton from "@/components/home/ThemeSwitcherButton";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const SettingsPage = ({ onClose }: { onClose: () => void }) => {
    const { t, i18n } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [refreshNeeded, setRefreshNeeded] = useState(false);
    
    const handleClose = () => {
        onClose();
        if (refreshNeeded) {
            window.location.reload();
        }
    }
    
    return (
        <Dialog open onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>{t('settings.title')}</DialogTitle>
            <DialogContent>
                <TextField
                    select
                    label={t('settings.language')}
                    fullWidth
                    variant="outlined"
                    sx={{ my: 1 }}
                    value={selectedLanguage}
                    onChange={(e) => {
                        const selectedLanguage = e.target.value;
                        i18n.changeLanguage(selectedLanguage, () => {
                            Cookies.set(cookieName, selectedLanguage, { path: '/' });
                        })
                        setSelectedLanguage(selectedLanguage);
                        setRefreshNeeded(true);
                    }}
                    helperText={<Trans
                        i18nKey={'settings.helpTranslation'}
                        t={t}
                        components={[<Link
                            key="1"
                            to={translationLink}
                            style={{ textDecoration: 'none', color: 'blue' }}
                            className="translation-link"
                            target="_blank"
                            rel="noopener noreferrer">{translationLink}</Link>]}
                    />
                    }
                >
                    {languages.map((lang: string) => (
                        <MenuItem key={lang} value={lang}>
                            {t(`languages.${lang}`)}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Typography variant="body1">
                        {t('settings.theme')}
                    </Typography>
                    <ThemeSwitcherButton />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="outlined">
                    {t('close')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SettingsPage;

