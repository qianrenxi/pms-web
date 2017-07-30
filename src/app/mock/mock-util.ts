import * as Mockjs from 'mockjs';
import { Pagination } from '../common/entity/pagination';
import { environment } from '../../environments/environment';

// export const BASE_URL = 'http://localhost:8085';
export const BASE_URL = '';

export const RequestMethod = {
    GET: 'get',
    PUT: 'put',
    POST: 'post',
    DELETE: 'delete',
    OPTIONS: 'options'
}


export class Mock {

    getFullUrl(uri) {
        uri = uri.startsWith('/') ? uri : `/${uri}`;
        return new RegExp(`${BASE_URL}${uri}$`);
    }

    mockData(template: Object | Function = {}) {
        let data = Mockjs.mock(template);
        console.log(data);
        return data;
    }

    mock(rurl?: string | RegExp, rtype?: string, template: Object | Function = {}): void | any {
        if (environment.production) {
            return ;
        }

        if (rurl) {
            let url = this.getFullUrl(rurl);
            console.log(`Mock on url ${url} ${rtype} ${JSON.stringify(template)}`);
            if (rtype) {
                Mockjs.mock(url, rtype, template);
            } else {
                Mockjs.mock(url, template);
            }
        } else {
            return Mockjs.mock(template);
        }
    }

    get(uri: string, template: Object | Function) {
        this.mock(uri, RequestMethod.GET, template);
    }

    put(uri: string, template: Object | Function) {
        this.mock(uri, RequestMethod.PUT, template);
    }

    post(uri: string, template: Object | Function) {
        this.mock(uri, RequestMethod.POST, template);
    }

    delete(uri: string, template: Object | Function) {
        this.mock(uri, RequestMethod.DELETE, template);
    }

    options(uri: string, template: Object | Function) {
        this.mock(uri, RequestMethod.OPTIONS, template);
    }

    getPageModel() {
        let page = new Pagination();
            page.first = true;
            page.last = false;
            page.size = 20;
            page.number = 0;
            page.numberOfElements = 0;
            page.totalElements = 100;
            page.totalPages = 5;
        return page;
    }
}

export const MockUtil = new Mock();
