import { ProductApiService } from './../../common/api/product-api.service';
import { Product } from './../../common/entity/product';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductDetailResolver implements Resolve<Product> {

    constructor(private productApi: ProductApiService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        let productId = route.paramMap.get('productId');

        if (!!productId) {
            return this.productApi.getOne(productId);
        } else {
            this.router.navigateByUrl('/product/home');
            return Observable.of(null);
        }
    }

}
