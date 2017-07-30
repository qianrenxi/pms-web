import { Component, OnInit } from '@angular/core';
import { Product } from '../../../entity/product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'pms-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss']
})
export class ProductSelectComponent implements OnInit {
  product: Product;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllOfPage().subscribe(
      products => this.products = products.content
    );
  }

  select(product: Product) {
    this.product = product;
  }
}
