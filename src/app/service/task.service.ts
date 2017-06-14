import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BASE_URL } from './config';
import * as util from './utils';
import { Task } from '../entity/task';


@Injectable()
export class TaskService {
    constructor(private http: Http) { }

    getTasks(): Observable<Task[]> {
        let prodListUrl = BASE_URL + '/tasks';
        return this.http.get(prodListUrl)
            .map(util.extractData)
            .catch(util.handleError);
    }

    getTask(id: number): Observable<Task> {
        let url = `${BASE_URL}/tasks/${id}`;
        return this.http.get(url)
            .map(util.extractData)
            .catch(util.handleError);
    }
}
