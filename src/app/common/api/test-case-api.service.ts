import { TestCase } from 'app/common/entity';
import { BaseService } from './../core/service/base.service';
import { HttpAdaptor } from './../core/http/http-adaptor';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormDataUtil } from './../core/utils/form-data-util';
import { TestStep } from './../entity/test-step';

@Injectable()
export class TestCaseApiService extends BaseService<TestCase> {
    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/test/cases');
    }

    update(entity): Observable<TestCase> {
        let formData: FormData = FormDataUtil.covert(entity);

        let steps: TestStep[] = entity['steps'];
        if (steps && steps.length > 0) {
            steps.map((it, index) => {
                for (let key of Object.keys(it)) {
                    if (it[key]) {
                        formData.append(`steps[${index}].${key}`, it[key]);
                    }
                }
            });
        }

        return this.httpAdaptor.post(`${this.url}/${entity['id']}`, formData);
    }
}
