import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as util from './utils';
import { BASE_URL } from './config';
import { Requirement } from '../entity/requirement';
import { BaseService } from '../common/service/base.service';
import { HttpProxy } from '../common/utils/http-utils';


@Injectable()
export class RequirementService extends BaseService<Requirement> {
    constructor(private httpAdaptor: HttpProxy) {
        super(httpAdaptor.http, httpAdaptor, '/api/requirements');
    }

    getProperties(): Observable<{name: string, values: {key: string, value: string}[]}[]> {
        let rurl = `/api/requirements/properties`;
        return this.http.get(rurl)
            .map(util.extractData)
            .catch(util.handleError);
    }
}
