
export interface CuiPagination {
    total: number;
    page: number;
    size: number;
    content: any[];

    totalPage(): number;
    hasPrefix(): boolean;
    hasNext(): boolean;
}
