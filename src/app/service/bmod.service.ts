import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as util from './utils';
import { BASE_URL } from './config';
import { Bmod } from '../entity/bmod';

@Injectable()
export class BmodService {
    constructor(private http: Http) { }

    getModules(): Observable<Bmod[]> {
        return this.http.get(`${BASE_URL}/products/1/modules`)
            .map(util.extractData)
            .catch(util.handleError);
    }
}
