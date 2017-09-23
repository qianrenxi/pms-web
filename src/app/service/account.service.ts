import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../entity/user';
import { BASE_URL } from './config';
import * as util from './utils';

@Injectable()
export class AccountService {
    constructor(private http: Http) { }

    login(username: string, passwd: string): Observable<any> {
        let rurl = `${BASE_URL}/login`;
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', passwd);
        return this.http.post(rurl, formData)
            .map(util.extractData)
            .catch(util.handleError);
    }
}
