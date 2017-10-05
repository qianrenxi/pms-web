import { RequirementApiService } from './../../common/api/requirement-api.service';
import { Requirement } from './../../common/entity/requirement';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequirementDetailResolver implements Resolve<Requirement> {
    constructor(private requirementApi: RequirementApiService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Requirement> {
        let productId = route.paramMap.get('productId');
        let requirementId = route.paramMap.get('requirementId');

        if (!!requirementId) {
            return this.requirementApi.getOne(requirementId);
        } else {
            if (!!productId) {
                this.router.navigateByUrl(`/product/${productId}/requirement`);
            } else {
                this.router.navigateByUrl(`/product/home`);
            }
            return Observable.of(null);
        }
    }

}
