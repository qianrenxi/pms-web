import { Http, Response, ConnectionBackend, Request, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { Router,  } from '@angular/router';


export function extractData(res: Response) {
    let body: any = {};
    try {
        body = res.json();
    } catch (e) {
    };

    return body.data || body || { };
}

export function handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        let body: any = '';
        try {
            body = error.json();
        } catch (e) {
            body = error.text || '';
        }
        let err = body.message || body.error || JSON.stringify(body);
        if (!err || err === 'No message available') {
            err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = body.message;
        }
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}


@Injectable()
export class HttpProxy {

    constructor(public http: Http) {}

    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
        return this.http.request(url, options).map(extractData).catch(handleError);
    }

    /**
     * Performs a request with `get` http method.
     */
    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.get(url, options).map(extractData).catch(handleError);
    }

    /**
     * Performs a request with `post` http method.
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.http.post(url, body, options).map(extractData).catch(handleError);
    }

    /**
     * Performs a request with `put` http method.
     */
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.http.put(url, body, options).map(extractData).catch(handleError);
    }

    /**
     * Performs a request with `delete` http method.
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.delete(url, options).map(extractData).catch(handleError);
    }
    /**
     * Performs a request with `patch` http method.
     */
    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.http.patch(url, body, options).map(extractData).catch(handleError);
    }

    /**
     * Performs a request with `head` http method.
     */
    head(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.head(url, options).map(extractData).catch(handleError);
    }

    /**
     * Performs a request with `options` http method.
     */
    options(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.options(url, options).map(extractData).catch(handleError);
    }
}
