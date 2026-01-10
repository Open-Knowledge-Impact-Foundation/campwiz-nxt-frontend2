export interface User {
    id: string;
    username: string;
    email: string;
}

export interface Session extends User {
    permissionMap: Record<string, boolean>;
    logout: () => Promise<void>;
    hasPermission: (permission: string) => boolean;
}