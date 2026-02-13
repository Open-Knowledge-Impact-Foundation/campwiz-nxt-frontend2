import { useTranslation } from "react-i18next";
import { Button, CircularProgress, IconButton, useMediaQuery } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { lazy, Suspense, useState } from "react";

const SettingsPage = lazy(() => import('@/components/user/Setting'))

const SettingButton = () => {
    const [settingOpen, setSettingOpen] = useState(false);
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const { t } = useTranslation()
    const sx = {
        borderRadius: 30,
        m: 1,
    }
    
    return (
        <Suspense fallback={<CircularProgress size={24} sx={{ m: 1 }} />}>
            {isSmall ? (
                <IconButton
                    sx={sx}
                    onClick={() => setSettingOpen(true)}
                >
                    <SettingsIcon />
                </IconButton>
            ) : (
                <Button
                    variant="contained"
                    onClick={() => setSettingOpen(true)}
                    startIcon={<SettingsIcon />}
                    sx={sx}
                >
                    {t('settings.title')}
                </Button>
            )}
            {settingOpen && (
                <SettingsPage onClose={() => setSettingOpen(false)} />
            )}
        </Suspense>
    )
}

export default SettingButton
