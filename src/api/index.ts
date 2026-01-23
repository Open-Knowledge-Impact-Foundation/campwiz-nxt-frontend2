import type { ResponseError, ResponseSingle } from "@/types/response";

const API_PATH = import.meta.env.VITE_BACKEND_API_PATH || '/api/v2';
export const fetchFromBackend = async (path: string, options?: RequestInit): Promise<Response> => {
    const baseURL = import.meta.env.VITE_BACKEND_API_URL || '';
    const res = await fetch(`${baseURL}${path}`, options)
    return res
}
export async function fetchAPIFromBackendSingleWithErrorHandling<T>(path: string, req?: RequestInit): Promise<ResponseSingle<T> | ResponseError> {
    try {
        console.log(`${API_PATH}${path}`, req)
        const res = await fetchFromBackend(`${API_PATH}${path}`, req)
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
        }
        const r = await res.json();
        if (res.ok) {
            return r
        } else {
            return {
                detail: r.detail
            }
        }
    } catch (e) {
        return {
            detail: (e as Error).message
        }
    }

}