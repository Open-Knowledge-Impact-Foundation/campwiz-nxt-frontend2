import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CircularProgress, Paper, Typography } from '@mui/material';
import { fetchAPIFromBackendSingleWithErrorHandling } from '@/api';
import LottieWrapper from '@/components/LottieWrapper';

interface RedirectResponse {
    redirect: string;
}

const CallbackWritePage = () => {
    const [searchParams] = useSearchParams();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const handleCallback = async () => {
            try {
                // Get all query parameters
                const queryString = searchParams.toString();

                if (!queryString) {
                    throw new Error('No query parameters provided');
                }

                // Get the current origin (e.g., http://localhost:5173)
                const baseURL = window.location.origin;

                // Forward all query parameters to the backend /user/callback/write endpoint, including baseURL
                const res = await fetchAPIFromBackendSingleWithErrorHandling<RedirectResponse>(
                    `/user/callback/write?${queryString}&baseURL=${encodeURIComponent(baseURL)}`,
                    {
                        method: 'GET',
                        credentials: 'include',
                        cache: 'no-cache',
                    }
                );

                if ('detail' in res) {
                    throw new Error(res.detail);
                }

                // Redirect to the location provided by the backend
                const redirectUrl = res.data.redirect;
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                } else {
                    throw new Error('No redirect URL provided');
                }
            } catch (e) {
                console.error('Callback error:', e);
                setError((e as Error).message);
            }
        };

        handleCallback();
    }, [searchParams]);

    if (error) {
        return (
            <Paper sx={{
                padding: 4,
                textAlign: 'center',
                maxWidth: 500,
                margin: 'auto',
                mt: 8,
            }}>
                <LottieWrapper src='/lottie/login-failed.lottie' />
                <Typography variant="h5" color="error" sx={{ mt: 2, mb: 2 }}>
                    Authentication Error
                </Typography>
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
                <Typography variant="body2" sx={{ mt: 3 }}>
                    <a href="/user/login" style={{ color: 'blue' }}>
                        Back to Login
                    </a>
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper sx={{
            padding: 4,
            textAlign: 'center',
            maxWidth: 500,
            margin: 'auto',
            mt: 8,
        }}>
            <LottieWrapper src='/lottie/login-required.lottie' loop={true} />
            <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
                Authenticating...
            </Typography>
            <CircularProgress />
            <Typography variant="body2" sx={{ mt: 2 }}>
                Please wait while we complete your login
            </Typography>
        </Paper>
    );
};

export default CallbackWritePage;
