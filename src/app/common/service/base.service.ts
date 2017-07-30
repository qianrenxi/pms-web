import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpProxy } from '../utils/http-utils';
import { FormDataUtil } from '../utils/form-data-util';
import { Pagination } from '../entity/pagination';

// @Injectable()
export class BaseService<T> {
    constructor(protected http: Http, protected httpProxy: HttpProxy, protected url: string) { }

    getAll(params?: any): Observable<T[]> {
        return this.httpProxy.get(this.url, {params: params});
    }

    getAllOfPage(params?: any, page?: Pagination<T>): Observable<Pagination<T>> {
        params = params || {};
        if (page) {
            params['size'] = page.size;
            params['page'] = page.number;
        }
        return this.httpProxy.get(this.url, {params: params});
    }

    getOne(id: any): Observable<T> {
        return this.httpProxy.get(`${this.url}/${id}`);
    }

    create(entity: T): Observable<T> {
        return this.httpProxy.put(this.url, entity);
    }

    update(entity: T): Observable<T> {
        let formData: FormData = FormDataUtil.covert(entity);
        return this.httpProxy.post(`${this.url}/${entity['id']}`, formData);
    }

    delete(ids: any[]): Observable<any> {
        return this.httpProxy.delete(this.url, {params: {ids: ids}});
    }

    save(entity: T): Observable<T> {
        if (!entity) {
            return Observable.of(null);
        }

        if (entity['id']) {
            return this.update(entity);
        } else {
            return this.create(entity);
        }
    }
}
