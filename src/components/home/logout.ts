import { fetchAPIFromBackendSingleWithErrorHandling } from "@/api"

type RedirectResponse = {
    redirect: string
}

const logout = async (refresh: boolean = false) => {
    const res = await fetchAPIFromBackendSingleWithErrorHandling<RedirectResponse>("/user/logout", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'manual',
    });
    
    if (!res) {
        return;
    }
    
    if ('detail' in res) {
        console.error(res.detail);
        return;
    }
    
    if (typeof window !== 'undefined') {
        if (refresh) {
            window.location.reload();
        } else if (res.data.redirect) {
            window.location.href = res.data.redirect;
        }
    }
}

export default logout
