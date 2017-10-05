import { PlanApiService } from 'app/common/api';
import { Plan } from 'app/common/entity';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlanDetailResolver implements Resolve<Plan> {

    constructor(private planApi: PlanApiService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Plan> {
        let productId = route.paramMap.get('productId');
        let planId = route.paramMap.get('planId');

        if (!!planId) {
            return this.planApi.getOne(planId);
        } else {
            if (!!productId) {
                this.router.navigateByUrl(`/product/${productId}/plan`);
            } else {
                this.router.navigateByUrl(`/product/home`);
            }
            return Observable.of(null);
        }
    }

}
