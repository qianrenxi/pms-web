import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../entity/product';

@Component({
  selector: 'pms-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {product: Product}) => {
      this.product = data.product;
    });

  }

}
