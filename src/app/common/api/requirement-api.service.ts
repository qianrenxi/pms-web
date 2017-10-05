import { RequirementSpec } from './../entity/requirement-spec';
import { FormDataUtil } from './../core/utils/form-data-util';
import { HttpAdaptor } from './../core/http/http-adaptor';
import { Requirement } from './../entity/requirement';
import { BaseService } from './../core/service/base.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequirementApiService extends BaseService<Requirement> {
    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/requirements');
    }

    change(id: number, data: any): Observable<Requirement> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${id}/change`, formData);
    }

    getNear(id: number): Observable<{prev?: Requirement, next?: Requirement}> {
        return this.httpAdaptor.get(`${this.url}/${id}/near`);
    }

    getSpec(id: number, version: number): Observable<RequirementSpec> {
        return this.httpAdaptor.get(`${this.url}/${id}/spec/${version}`);
    }

    review(id: number, reviewInfo): Observable<any> {
        let formData = FormDataUtil.covert(reviewInfo);
        return this.httpAdaptor.post(`${this.url}/${id}/review`, formData);
    }

    close(id: number, data): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${id}/close`, formData);
    }

    remark(id: number, data): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${id}/remark`, formData);
    }

    getChangeLog(id: number): Observable<{changeLog?: string}> {
        return this.httpAdaptor.get(`${this.url}/${id}/changeLog`);
    }
}
