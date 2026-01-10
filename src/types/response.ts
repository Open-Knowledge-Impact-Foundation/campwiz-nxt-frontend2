export interface ResponseSingle<T> {
    data: T;
}
export interface ResponseError {
    detail: string;
}
export type ResponseMultiple<T> = {
    data: T[];
    total: number;
};