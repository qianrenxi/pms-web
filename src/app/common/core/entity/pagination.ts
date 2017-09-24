import { CuiPagination } from 'consoleui';

export class Pagination<T> implements CuiPagination {
    first: boolean;
    last: boolean;

    /**
     * start from 0
     *
     * @type {number}
     * @memberOf Pagination
     */
    number: number;
    numberOfElements: number;
    size: number;
    sort: string;
    totalElements: number;
    totalPages: number;
    content: T[];
}
