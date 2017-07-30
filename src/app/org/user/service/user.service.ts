import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpProxy } from '../../../common/utils/http-utils';
import { User } from '../../../entity/user';
import { BaseService } from '../../../common/service/base.service';

@Injectable()
export class UserService extends BaseService<User> {

    constructor(protected httpProxy: HttpProxy) {
        super(httpProxy.http, httpProxy, '/api/users');
    }

}
