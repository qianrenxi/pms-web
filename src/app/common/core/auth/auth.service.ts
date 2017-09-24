import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { HttpUtils } from '../http';

// import { User } from '../../system/entity/user';
// import { Site } from '../../system/entity/site';
interface User {
    id?: number;
    username?: string;
}

interface Site {
    id?: number;
    name?: string;
}

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  private userToken: {user: any, currentSite: any};

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) { }

  // login(): Observable<boolean> {
  login(username: string, passwd: string, rememberMe: boolean): Observable<any> {
    let url = '/api/login';
    let data = new FormData();
    data.append('username', username);
    data.append('password', passwd);
    data.append('rememberMe', '' + rememberMe);

    return this.http.post(url, data)
        .map(resp => {
            let res = HttpUtils.extractData(resp);
            this.isLoggedIn = res['isLoggedIn'];
            if (this.isLoggedIn) {
                this.userToken = res['userToken'];
            }
            return this.isLoggedIn;
        })
        .catch(HttpUtils.handleError);
  }

  logout(): Observable<void> {
    let url = '/api/logout';

    this.isLoggedIn = false;
    return this.http.get(url)
        .map(HttpUtils.extractData)
        .catch((resp: Response) => {
            return HttpUtils.handleError(resp);
        });
  }

  stats(): Observable<boolean> {
      let url = '/api/stats';

      // return this.http.options(url)
      return this.http.get(url)
            .map( resp => {
                this.isLoggedIn = true;
                if (!this.userToken) {
                    this.loginfo();
                }
                return true;
            })
            .catch( resp => {
                this.isLoggedIn = false;
                return HttpUtils.handleError(resp);
            });
  }

  loginfo(): Observable<any> {
      let url = '/api/loginfo';
      return this.http.get(url)
        .map(resp => {
            let ut = HttpUtils.extractData(resp);
            this.userToken = ut;
            return this.userToken;
        }).catch(HttpUtils.handleError);
  }

  getCurrentUser(): Observable<User> {
      if (!this.isLoggedIn) {
          return ;
      }
      if (this.isLoggedIn && !this.userToken) {
          return this.loginfo().map(ut => ut.user);
      }

      return Observable.of(this.userToken.user);
  }

  getCurrentSite(): Observable<Site> {
      if (!this.isLoggedIn) {
          return ;
      }
      if (this.isLoggedIn && !this.userToken) {
          return this.loginfo().map(ut => ut.currentSite);
      }

      return Observable.of(this.userToken.currentSite);
  }
}
