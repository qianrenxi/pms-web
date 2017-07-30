import { Component, OnInit } from '@angular/core';
import { Product } from '../../../entity/product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'pms-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  activeProduct: Product = {id: 1, name: 'Test Product', code: 'TP-01'};

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  changeProduct(product) {
    this.activeProduct = product;
  }
}
