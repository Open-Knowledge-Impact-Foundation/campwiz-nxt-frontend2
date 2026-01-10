import { useEffect, useState } from "react";
import type { Session } from "../types/session";
import sessionContext from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
        const fetchSession = async () => {
            try {
                const response = await fetch('/api/session', {
                    credentials: 'include',
                });
                if (response.ok) {
                    const data = await response.json();
                    setSession(data as Session);
                } else {
                    setSession(null);
                }
            } catch (error) {
                setSession(null);
                console.error("Failed to fetch session:", error);
            }
        };
        fetchSession();
    }, []);
    if(!session) {
        let path = encodeURIComponent(window.location.pathname + window.location.search);
        if(window.location.pathname.startsWith('/user/login')) {
            path = '/';
        }
        return <Navigate to={`/user/login?redirect=${path}`} replace />;
    }
    return (
        <sessionContext.Provider value={session}>
            {children}
        </sessionContext.Provider>
    )
}
export default SessionProvider;