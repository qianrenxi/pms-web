import { CuiPagination } from './defs/api';

export class PaginationModel implements CuiPagination {
    total: number;
    page: number;
    size: number;
    content: any[];

    private _totalPage: number;

    constructor(total: number, size: number, page: number, content?: any[]) {
        this.total = total;
        this.size = size;
        this.page = page;
        this.content = content;

        this._totalPage = total && size ? Math.floor(total / size) + (total % size > 0 ? 1 : 0) : 0;
    }

    totalPage(): number {
        return this._totalPage;
    }

    hasPrefix(): boolean {
        return this.page > 1;
    }

    hasNext(): boolean {
        return this.page < this._totalPage;
    }
}
