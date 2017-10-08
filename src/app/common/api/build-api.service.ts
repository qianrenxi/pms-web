import { Pagination } from 'app/common/core';
import { HttpAdaptor } from './../core/http/http-adaptor';
import { Build, Requirement } from 'app/common/entity';
import { BaseService } from './../core/service/base.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BuildApiService extends BaseService<Build> {
    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/builds');
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
}
