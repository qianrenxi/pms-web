import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../common/service/base.service';
import { Module } from '../entity/module';
import { HttpProxy } from '../common/utils/http-utils';

@Injectable()
export class ModuleService extends BaseService<Module> {
    constructor(httpProxy: HttpProxy) {
        super(httpProxy.http, httpProxy, '/api/modules');
    }

}
