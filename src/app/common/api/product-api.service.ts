import { Module } from './../entity/module';
import { Plan } from './../entity/plan';
import { Requirement } from './../entity/requirement';
import { Pagination } from './../core/entity/pagination';
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

    requirements(productId: number): Observable<Pagination<Requirement>> {
        return this.httpAdaptor.get(`/api/products/${productId}/requirements`);
    }

    plans(productId: number): Observable<Pagination<Plan>> {
        return this.httpAdaptor.get(`/api/products/${productId}/plans`);
    }

    modulesFlat(productId: number): Observable<Module[]> {
        return this.httpAdaptor.get(`/api/products/${productId}/modulesFlat`);
    }
}
