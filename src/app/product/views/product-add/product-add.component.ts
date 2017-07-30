import { Component, OnInit } from '@angular/core';
import { Product } from '../../../entity/product';

@Component({
  selector: 'pms-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();

  constructor() { }

  ngOnInit() {
    /* this.route.params
      .switchMap((params: Params) => {
        if (!!params['productId']) {
          return this.productService.getOne(+params['productId']);
        } else {}
      }).subscribe(
        prod => this.product = prod,
        error => this.product = new Product()
      ); */
  }

}
