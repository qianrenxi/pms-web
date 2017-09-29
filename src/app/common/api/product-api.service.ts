import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../core/service/base.service';
import { Product } from '../entity/product';
import { HttpAdaptor } from '../core/http/http-adaptor';

@Injectable()
export class ProductApiService extends BaseService<Product> {

    constructor(protected httpAdaptor: HttpAdaptor) {
        super(httpAdaptor.http, httpAdaptor, '/api/products');
    }

}
