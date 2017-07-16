import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import * as httpUtils from '../utils/http-utils';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) { }

  // login(): Observable<boolean> {
  login(): Observable<any> {
    let url = '/api/login';
    let data = new FormData(); // {username: 'system', password: '888888'}
    data.append('username', 'system');
    data.append('password', '888888');

    // let requestOptions = new RequestOptions({withCredentials: true});
    /* return this.http.post(url,  {username: 'system', password: '888888'}, // JSON.stringify({username: 'system', password: '888888'}),
            {withCredentials: true, headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})})
        .map(httpUtils.extractData)
        .catch(httpUtils.handleError); */
        this.isLoggedIn = true;
    return this.http.post(url, data)
        .map(httpUtils.extractData)
        .catch(httpUtils.handleError);

    // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): Observable<void> {
    let url = '/api/logout';

    this.isLoggedIn = false;
    return this.http.get(url)
        .map(httpUtils.extractData)
        .catch((resp: Response) => {
            return httpUtils.handleError(resp);
        });
  }

  stats(): Observable<boolean> {
      let url = '/api/stats';

      return this.http.options(url)
            .map( resp => {
                this.isLoggedIn = true;
                return true;
            })
            .catch( resp => {
                this.isLoggedIn = false;
                return httpUtils.handleError(resp);
            });
  }
}
