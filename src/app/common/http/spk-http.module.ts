import { NgModule, Provider } from '@angular/core';
import { InterceptedHttp } from './intercepted-http';
import { HttpModule } from '@angular/http';
import { UnauthenticatedInterceptor } from './unauthenticated-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { HttpInterceptor } from './http-interceptor';
import { WithCredentialsIntorceptor } from './credentials-interceptor';
import { UrlIntorceptor } from './url-interceptor';
import {
    Http,
    ConnectionBackend,
    XHRBackend,
    RequestOptions,
    Request,
    Response,
    RequestOptionsArgs,
    RequestMethod,
} from '@angular/http';

export function interceptedHttpFactory(
        xhrBackend: XHRBackend, requestOptions: RequestOptions,
        ...interceptors: HttpInterceptor[]): Http {
    let interceptedHttp = new InterceptedHttp(xhrBackend, requestOptions);
    if (interceptors && interceptors.length > 0 ) {
        interceptedHttp.addInterceptors(...interceptors);
    }
    return interceptedHttp;

}

export const INTERCEPTED_HTTP_PROVIDER: Provider = {
    provide: Http,
    useFactory: interceptedHttpFactory,
    deps: [XHRBackend, RequestOptions,
        // UrlIntorceptor,
        WithCredentialsIntorceptor,
        ErrorInterceptor,
        UnauthenticatedInterceptor
    ]
};

@NgModule({
    imports: [
        HttpModule
    ],
    exports: [],
    declarations: [],
    providers: [INTERCEPTED_HTTP_PROVIDER,
        // UrlIntorceptor,
        WithCredentialsIntorceptor,
        ErrorInterceptor,
        UnauthenticatedInterceptor
    ],
})
export class SpkHttpModule { }


