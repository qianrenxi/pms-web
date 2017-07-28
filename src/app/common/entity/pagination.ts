import { CuiPagination } from 'consoleui';

export class Pagination<T> implements CuiPagination {
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    sort: string;
    totalElements: number;
    totalPages: number;
    content: T[];
}
