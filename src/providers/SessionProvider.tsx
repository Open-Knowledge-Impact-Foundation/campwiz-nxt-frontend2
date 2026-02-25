import { useEffect, useState } from "react";
import type { Session } from "../types/session";
import sessionContext from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";
import { fetchAPIFromBackendSingleWithErrorHandling } from "@/api";
const SessionLoading = () => {
    return <div>Loading who are you...</div>;
}
const SessionError = ({ error }: { error: Error }) => {
    return <div>Error loading session: {error.message}</div>;
}
const SessionProvider = ({ children, requireAuth = true }: { children: React.ReactNode, requireAuth?: boolean }) => {
    const [sessionLoading, setSessionLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null);
    const [sessionError, setSessionError] = useState<Error | null>(null);
    useEffect(() => {
        const fetchSession = async () => {
            setSessionLoading(true);
            setSessionError(null);
            try {
                const response = await fetchAPIFromBackendSingleWithErrorHandling<Session>('/user/me');
                if ('detail' in response) {
                    throw new Error(response.detail);
                }
                setSession(response.data);
            } catch (error) {
                setSession(null);
                console.error("Failed to fetch session:", error);
                setSessionError(error as Error);
            } finally {
                setSessionLoading(false);
            }
        };
        fetchSession();
    }, []);

    // If authentication is required for this provider and there is no session after loading, redirect to login
    if (!session && !sessionLoading && requireAuth) {
        let path = encodeURIComponent(window.location.pathname + window.location.search);
        if (window.location.pathname.startsWith('/user/login')) {
            path = '/';
        }
        return <Navigate to={`/user/login?next=${path}`} replace />;
    }

    // Show loading/error UI only when auth is required. For public pages, render children while fetching.
    if (sessionLoading && requireAuth) {
        return <SessionLoading />;
    }
    if (sessionError && requireAuth) {
        return <SessionError error={sessionError} />;
    }

    return (
        <sessionContext.Provider value={session}>
            {children}
        </sessionContext.Provider>
    )
}
export default SessionProvider;