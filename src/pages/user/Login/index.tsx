import Button from "@mui/material/Button"
import { CircularProgress, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";

import ArrowForward from '@mui/icons-material/ArrowForward';
import LoginBackground from '@/assets/login5.gif';
import { useCallback, useState } from "react";
import WikipediaIcon from "@/components/WikipediaIcon";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { fetchAPIFromBackendSingleWithErrorHandling } from "@/api";
import { useNavigate } from "react-router-dom";

interface RedirectResponse {
    redirect: string;
}
// Mock function - replace with actual implementation


const LoginComponent = ({ isMobile }: { isMobile: boolean }) => {
    const searchParams = new URLSearchParams(window.location.search);
    const next = searchParams.get('next');
    const pathName = searchParams.get('pathName') || '/user/login';
    const [clicked, setClicked] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const { t } = useTranslation();
    const theme = useTheme();
    const navigate = useNavigate();
    const loginInitiateActionClient = useCallback(async () => {
        setError(null);
        setClicked(true);
        try {
            const qs = `?next=${next || '/'}`
            console.log('Fetching login initiation from:', pathName + qs);
            const res = await fetchAPIFromBackendSingleWithErrorHandling<RedirectResponse>(pathName + qs, {
                cache: 'no-cache',
                credentials: 'include',
                redirect: 'manual',
            });
            if ('detail' in res) {
                throw new Error(res.detail);
            }
            const redirectResponse = res.data as RedirectResponse;
            console.log('Redirect response:', redirectResponse);
            const location = redirectResponse.redirect;
            if (!location) {
                throw new Error('No redirect URI provided');
            }
            navigate(location);
        } catch (e) {
            setError(e as Error);
        } finally {
            setClicked(false);
        }
    }, [navigate, next, pathName]);
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
                onClick={loginInitiateActionClient}
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