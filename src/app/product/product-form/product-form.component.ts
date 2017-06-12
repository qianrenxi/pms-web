import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../entity/product';
import { ProductService } from '../../service/product.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'pms-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product: Product;

  @Input('product') set setProduct(product: Product) {
    if (!product) {
      this.product = new Product();
    } else {
      this.product = product;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    if (!this.product) {
      this.product = new Product();
    }

    this.route.params
      .switchMap((params: Params) => {
        if (!!params['productId']) {
          return this.productService.getOne(+params['productId']);
        } else {}
      }).subscribe(
        prod => this.product = prod,
        error => this.product = new Product()
      );
  }

}
