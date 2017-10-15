import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Issue } from 'app/common/entity';
import { IssueApiService } from 'app/common/api';

@Injectable()
export class IssueDetailResolver implements Resolve<Issue> {
    constructor(private router: Router, private issueApi: IssueApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Issue> {
        let issueId = route.paramMap.get('issueId');
        let productId = route.paramMap.get('productId');

        if (issueId) {
            return this.issueApi.getOne(issueId);
        } else {
            if (productId) {
                this.router.navigate(['/test', productId, 'issue']);
            } else {
                this.router.navigate(['/test']);
            }
        }
    }
}
