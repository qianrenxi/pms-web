import { TestCase } from 'app/common/entity';
import { BaseService } from './../core/service/base.service';
import { HttpAdaptor } from './../core/http/http-adaptor';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestCaseApiService extends BaseService<TestCase> {
    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/test/cases');
    }

}
