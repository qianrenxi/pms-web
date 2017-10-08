import { Build } from 'app/common/entity';
import { Task, Requirement } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { FormDataUtil } from './../core/utils/form-data-util';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../core/service/base.service';
import { Project } from '../entity/project';
import { HttpAdaptor } from '../core/http/http-adaptor';

@Injectable()
export class ProjectApiService extends BaseService<Project> {

    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/projects');
    }

    start(projectId: number, params?: any): Observable<any> {
        let formData = FormDataUtil.covert(params);
        return this.httpAdaptor.post(`${this.url}/${projectId}/start`, formData);
    }

    delay(projectId: number, params?: any): Observable<any> {
        let formData = FormDataUtil.covert(params);
        return this.httpAdaptor.post(`${this.url}/${projectId}/delay`, formData);
    }

    pause(projectId: number, params?: any): Observable<any> {
        let formData = FormDataUtil.covert(params);
        return this.httpAdaptor.post(`${this.url}/${projectId}/pause`, formData);
    }

    close(projectId: number, params?: any): Observable<any> {
        let formData = FormDataUtil.covert(params);
        return this.httpAdaptor.post(`${this.url}/${projectId}/close`, formData);
    }

    getTasks(projectId: number, params?: any, page?: Pagination<Task>): Observable<Pagination<Task>> {
        params = params || {};
        if (page) {
            params['size'] = page.size;
            params['page'] = page.number;
        }
        return this.httpAdaptor.get(`${this.url}/${projectId}/tasks`, { params: params });
    }

    getRequirementLinked(projectId: number, params?: any, page?: Pagination<any>):
        Observable<Pagination<Requirement>> {
        params = params || {};
        if (page) {
            params['size'] = page.size;
            params['page'] = page.number;
        }

        return this.httpAdaptor.get(`${this.url}/${projectId}/requirements/linked`, { params: params });
    }

    getRequirementNotLinked(projectId: number, params?: any, page?: Pagination<any>):
        Observable<Pagination<Requirement>> {
        params = params || {};
        if (page) {
            params['size'] = page.size;
            params['page'] = page.number;
        }

        return this.httpAdaptor.get(`${this.url}/${projectId}/requirements/notLinked`, { params: params });
    }

    linkRequirements(projectId: number, requirementIds: number[]): Observable<any> {
        return this.httpAdaptor.post(`${this.url}/${projectId}/requirements/link`, null,
            { params: { requirementIds: requirementIds } });
    }

    unlinkRequirements(projectId: number, requirementIds: number[]): Observable<any> {
        return this.httpAdaptor.post(`${this.url}/${projectId}/requirements/unlink`, null,
            { params: { requirementIds: requirementIds } });
    }

    getBuilds(projectId: number): Observable<Build[]> {
        return this.httpAdaptor.get(`${this.url}/${projectId}/builds`);
    }
}
