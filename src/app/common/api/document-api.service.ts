import { HttpAdaptor } from './../core/http/http-adaptor';
import { Document } from './../entity/document';
import { BaseService } from './../core/service/base.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentApiService extends BaseService<Document> {
    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/docs')
    }

}
