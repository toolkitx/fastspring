export interface FastSpringPageResponse {
    action: string;
    result: string;
    page: number;
    limit: number;
    nextPage: number;
    total: number;

    [key: string]: any;
}
