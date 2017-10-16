import { DocLibApiService } from 'app/common/api';
import { HttpAdaptor } from './../../common/core/http/http-adaptor';
import { DocLib } from 'app/common/entity';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DoclibDetailResolver implements Resolve<DocLib> {

    constructor(private router: Router, private docLibApi: DocLibApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DocLib> {
        let doclibId = route.paramMap.get('docLibId');

        if (doclibId) {
            return this.docLibApi.getOne(doclibId);
        } else {
            this.router.navigate(['/document']);

            return Observable.of(null);
        }
    }
}
