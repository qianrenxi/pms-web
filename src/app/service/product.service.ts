import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../entity/product';

import * as util from './utils';
import { BaseService } from '../common/service/base.service';
import { HttpProxy } from '../common/utils/http-utils';

@Injectable()
export class ProductService extends BaseService<Product> {
    constructor(protected httpProxy: HttpProxy) {
        super(httpProxy.http, httpProxy, '/api/products');
    }
}
