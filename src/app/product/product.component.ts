import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'pms-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  activeProduct: Product = {id: 1, name: 'Test Product', code: 'TP-01'};
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        prods => {
          this.products = prods;
          if (!!prods && prods.length > 0) {
            // TODO: 从 Cookie 里边读取之前的选择
            this.activeProduct = prods[0];
          }
        },
        err => {}
      );
  }

  selectOne(id) {
    let sp = this.products.filter(it => it.id == id);
    if (sp.length > 0) {
      this.activeProduct = sp[0];
    }
  }
}
