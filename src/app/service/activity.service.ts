import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BASE_URL } from './config';
import { Activity } from '../entity/activity';

import * as util from './utils';

@Injectable()
export class ActivityService {
    constructor(private http: Http) { }

    getActivities(): Observable<{date: Date, activities: Activity[]}[]> {
        let rurl = `${BASE_URL}/activities`;
        return this.http.get(rurl)
            .map(util.extractData)
            .catch(util.handleError);
    }
}
