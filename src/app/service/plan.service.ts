import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BASE_URL } from './config';
import { Plan } from '../entity/plan';

import * as util from './utils';

@Injectable()
export class PlanService {
    constructor(private http: Http) { }

    getPlans(): Observable<Plan[]> {
        let prodListUrl = BASE_URL + '/products/1/plans';
        return this.http.get(prodListUrl)
            .map(util.extractData)
            .catch(util.handleError);
    }

    getPlan(id: number): Observable<Plan> {
        let url = `${BASE_URL}/products/1/plans/${id}`;
        return this.http.get(url)
            .map(util.extractData)
            .catch(util.handleError);
    }
}
