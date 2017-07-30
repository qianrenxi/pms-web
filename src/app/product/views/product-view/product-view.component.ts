import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'pms-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = {};

    this.productService.getOne(2).subscribe(
      prod => this.product = prod
    );

  }

}
