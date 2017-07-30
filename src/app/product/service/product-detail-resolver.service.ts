import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../../entity/product';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../service/product.service';

@Injectable()
export class ProductDetailResolver implements Resolve<Product> {

    constructor(
        private productService: ProductService,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        let id = route.params['productId'];

        if (!id) {
            return Observable.of(null);
        }

        return this.productService.getOne(id).map((product) => {
            if (product) {
                return product;
            } else {
                // id not found
                // 执行跳转， 回list
                return null;
            }
        });
    }
}
