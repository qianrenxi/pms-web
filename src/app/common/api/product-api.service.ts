import { Build, TestCase, Issue, TestTask, TestSuite } from 'app/common/entity';
import { Project } from './../entity/project';
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
        return this.httpAdaptor.get(`${this.url}/${productId}/requirements`);
    }

    plans(productId: number): Observable<Pagination<Plan>> {
        return this.httpAdaptor.get(`${this.url}/${productId}/plans`);
    }

    modulesFlat(productId: number): Observable<Module[]> {
        return this.httpAdaptor.get(`${this.url}/${productId}/modulesFlat`);
    }

    projects(productId: number): Observable<Project[]> {
        return this.httpAdaptor.get(`${this.url}/${productId}/projects`);
    }

    getBuilds(productId: number): Observable<Build[]> {
        return this.httpAdaptor.get(`${this.url}/${productId}/builds`);
    }

    getIssues(productId: number): Observable<Pagination<Issue>> {
        return this.httpAdaptor.get(`${this.url}/${productId}/test/issues`);
    }

    getTestCases(productId: number): Observable<Pagination<TestCase>> {
        return this.httpAdaptor.get(`${this.url}/${productId}/test/cases`);
    }

    getTestTasks(productId: number): Observable<Pagination<TestTask>> {
        return this.httpAdaptor.get(`${this.url}/${productId}/test/tasks`);
    }

    getTestSuites(productId: number): Observable<Pagination<TestSuite>> {
        return this.httpAdaptor.get(`${this.url}/${productId}/test/suites`);
    }
}
