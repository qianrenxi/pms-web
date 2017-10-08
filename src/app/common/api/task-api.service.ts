import { FormDataUtil } from './../core/utils/form-data-util';
import { HttpAdaptor } from './../core/http/http-adaptor';
import { Task } from 'app/common/entity';
import { BaseService } from './../core/service/base.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskApiService extends BaseService<Task> {

    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/tasks');
    }

    getNear(id: number): Observable<{prev?: Task, next?: Task}> {
        return this.httpAdaptor.get(`${this.url}/${id}/near`);
    }

    active(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/active`, formData);
    }

    assign(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/assign`, formData);
    }

    cancel(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/cancel`, formData);
    }

    close(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/close`, formData);
    }

    complete(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/complete`, formData);
    }

    pause(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/pause`, formData);
    }

    restart(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/restart`, formData);
    }

    start(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/start`, formData);
    }

    timeEntiry(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/timeEntiry`, formData);
    }

    remark(taskId: number, data: any): Observable<any> {
        let formData = FormDataUtil.covert(data);
        return this.httpAdaptor.post(`${this.url}/${taskId}/remark`, formData);
    }

}
