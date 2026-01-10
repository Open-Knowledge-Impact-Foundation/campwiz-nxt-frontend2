import Button from "@mui/material/Button"
import { CircularProgress, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";

import ArrowForward from '@mui/icons-material/ArrowForward';
import LoginBackground from '@/assets/login5.gif';
import { useState } from "react";
import WikipediaIcon from "@/components/WikipediaIcon";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

interface LoginInitiateResponse {
    redirect_uri?: string;
    error?: string;
}

// Mock function - replace with actual implementation
const loginInitiateActionClient = async (
    baseURI: string,
    next: string | null,
    pathName: string
): Promise<LoginInitiateResponse> => {
    // Call your backend API here
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ baseURI, next, pathName })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Login failed');
    }
    if (data.redirect_uri) {
        window.location.href = data.redirect_uri;
    }
    return data;
};

const LoginComponent = ({ isMobile }: { isMobile: boolean }) => {
    const searchParams = new URLSearchParams(window.location.search);
    const next = searchParams.get('next');
    const baseURI = window.location.origin;
    const pathName = searchParams.get('pathName') || '/user/login';
    const [clicked, setClicked] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const { t } = useTranslation();
    const theme = useTheme();
    
    const bgColor = theme.palette.mode === 'dark' 
        ? isMobile ? 'rgba(0,0,0, 0.95)' : 'rgba(0,0,0, 0.9)'
        : isMobile ? 'rgba(255,255,255, 0.95)' : 'rgba(255,255,255, 0.9)';
    return (
        <Paper sx={{
            padding: 2,
            ml: 'auto',
            mr: 0,
            textAlign: 'center',
            height: '100%',
            position: 'fixed',
            right: 0,
            backgroundColor: bgColor,
            width: {
                xs: '100%',
                sm: '70%',
                md: '50%',
                lg: '40%',
                xl: '40%'
            }
        }}>
            <img src='/logo.svg' alt="Logo" width={100} height={100} style={{ margin: 'auto', display: 'block' }} />
            <Typography variant="h5" sx={{ mb: 2 }}>
                {t('login.title')}
            </Typography>
            {error && <Typography variant="body1" color="error" sx={{ mb: 1 }}>{t(error.message)}</Typography>}
            <Typography variant="body1" sx={{ mb: 2 }}>
                <Trans
                    i18nKey={'settings.helpTranslation'}
                    t={t}
                    components={[<a
                        key="1"
                        href="https://translatewiki.net"
                        style={{ textDecoration: 'none', color: 'blue' }}
                        className="translation-link"
                        target="_blank"
                        rel="noopener noreferrer">{t('setting.translatewiki')}</a>]}
                />
            </Typography>
            <Button
                onClick={() => {
                    setError(null);
                    loginInitiateActionClient(baseURI, next, pathName).catch((e) => {
                        console.error(e);
                        setClicked(false);
                        setError(e);
                    });
                    setClicked(true)
                }}
                variant="contained"
                color="primary"
                sx={{
                    mt: 2,
                    borderRadius: 10,
                    p: 1,
                    px: 2,
                    mb: 3
                }}
                disabled={clicked}
                startIcon={<WikipediaIcon />}
                endIcon={!clicked && <ArrowForward />}
            >
                {t('login.loginWithWikimedia')}
                {clicked && <CircularProgress size={24} sx={{ ml: 1 }} />}
            </Button>
            <Typography variant="body1" sx={{ mt: 2 }}>
                <Trans
                    i18nKey={'login.loginDisclaimer'}
                    t={t}
                    components={[
                        <a key="terms" style={{ color: 'blue' }} href="/policy/terms">Terms of Service</a>,
                        <a key="privacy" style={{ color: 'blue' }} href="/policy/privacy">Privacy Policy</a>
                    ]}
                />
            </Typography>
            {next && <><Typography variant="body2" sx={{ mt: 2 }}>
                {t('login.afterLoginRedirect')}
            </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    {next}
                </Typography>
            </>}
        </Paper>
    )
}

const LoginPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Paper sx={{
            backgroundImage: `url(${LoginBackground})`,
            backgroundSize: {
                xs: '100% auto',
                sm: '60% auto',
            },
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            p: 0,
            m: 0,
            border: 0,
        }}>
            <LoginComponent isMobile={isMobile} />
        </Paper>
    )
}

export default LoginPage;