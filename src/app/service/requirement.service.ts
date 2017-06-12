import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as util from './utils';
import { BASE_URL } from './config';
import { Requirement } from '../entity/requirement';


@Injectable()
export class RequirementService {
    constructor(private http: Http) { }

    getRequirements(filter: any): Observable<Requirement[]> {
        let rurl = `${BASE_URL}/requirements`;
        return this.http.get(rurl)
            .map((resp: Response) => {
                return resp.json()['data'];
            })
            .catch(util.handleError);
    }

    getRequirement(id: number): Observable<Requirement> {
        let rurl = `${BASE_URL}/requirements/${id}`;
        return this.http.get(rurl)
            .map((resp: Response) => {
                return resp.json()['data'];
            })
            .catch(util.handleError);
    }
}
