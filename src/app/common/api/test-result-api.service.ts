import { HttpAdaptor } from './../core/http/http-adaptor';
import { BaseService } from './../core/service/base.service';
import { TestResult } from 'app/common/entity';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestResultApiService extends BaseService<TestResult> {
    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/test/results');
    }

}
