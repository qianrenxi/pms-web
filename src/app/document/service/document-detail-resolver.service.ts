import { DocumentApiService } from 'app/common/api';
import { HttpAdaptor } from './../../common/core/http/http-adaptor';
import { Document } from 'app/common/entity';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentDetailResolver implements Resolve<Document> {

    constructor(private router: Router, private documentApi: DocumentApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Document> {
        let documentId = route.paramMap.get('documentId');

        if (documentId) {
            return this.documentApi.getOne(documentId);
        } else {
            this.router.navigate(['/document']);

            return Observable.of(null);
        }
    }
}
