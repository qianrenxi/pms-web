import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TestCase } from 'app/common/entity';
import { TestCaseApiService } from 'app/common/api';

@Injectable()
export class TestCaseDetailResolver implements Resolve<TestCase> {
    constructor(private router: Router, private caseApi: TestCaseApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TestCase> {
        let caseId = route.paramMap.get('caseId');
        let productId = route.paramMap.get("productId");

        if (caseId) {
            return this.caseApi.getOne(caseId);
        } else {
            if (productId) {
                this.router.navigate(['test', productId, 'case']);
            } else {
                this.router.navigate(['test']);
            }
            return Observable.of(null);
        }
    }
}
