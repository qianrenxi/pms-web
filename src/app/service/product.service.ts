import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BASE_URL } from './config';
import { Product } from '../entity/product';

import * as util from './utils';

@Injectable()
export class ProductService {
    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        let prodListUrl = BASE_URL + '/products';
        return this.http.get(prodListUrl)
            .map((resp: Response) => {
                return resp.json()['products'];
            })
            .catch(util.handleError);
    }

    getOne(id: number): Observable<Product> {
        let url = `${BASE_URL}/products/${id}`;
        return this.http.get(url)
            .map((resp: Response) => {
                return resp.json()['data'];
            })
            .catch(util.handleError);
    }
}
