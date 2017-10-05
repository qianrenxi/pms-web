import { HttpAdaptor } from './../core/http/http-adaptor';
import { Plan } from './../entity/plan';
import { BaseService } from './../core/service/base.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlanApiService extends BaseService<Plan> {
    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/plans');
    }

}
