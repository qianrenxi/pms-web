import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BASE_URL } from './config';
import * as util from './utils';
import { Issue } from '../entity/issue';

@Injectable()
export class IssueService {
    constructor(private http: Http) { }

    getIssues(): Observable<Issue[]> {
        let prodListUrl = BASE_URL + '/issues';
        return this.http.get(prodListUrl)
            .map(util.extractData)
            .catch(util.handleError);
    }

    getIssue(id: number): Observable<Issue> {
        let url = `${BASE_URL}/issues/${id}`;
        return this.http.get(url)
            .map(util.extractData)
            .catch(util.handleError);
    }
}
