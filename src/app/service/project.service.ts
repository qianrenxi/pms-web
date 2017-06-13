import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Project } from '../entity/project';
import * as util from './utils';
import { BASE_URL } from './config';


@Injectable()
export class ProjectService {
    constructor(private http: Http) { }

    getProjects(): Observable<Project[]> {
        return this.http.get(`${BASE_URL}/projects`)
            .map(util.extractData)
            .catch(util.handleError);
    }

    getProject(id: number): Observable<Project> {
        return this.http.get(`${BASE_URL}/projects/${id}`)
            .map(util.extractData)
            .catch(util.handleError);
    }
}
