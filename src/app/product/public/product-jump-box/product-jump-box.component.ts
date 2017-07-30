import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../entity/product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'pms-product-jump-box',
  templateUrl: './product-jump-box.component.html',
  styleUrls: ['./product-jump-box.component.scss']
})
export class ProductJumpBoxComponent implements OnInit {
  @Input() activeProduct: Product = {id: 1, name: 'Test Product', code: 'TP-01'};
  products: Product[];

  @Output() jumpTo = new EventEmitter();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllOfPage()
      .subscribe(
        prods => {
          this.products = prods.content.slice(0, 5);
          if (!!prods && prods.content.length > 0) {
            // TODO: 从 Cookie 里边读取之前的选择
            this.activeProduct = prods.content[0];
          }
        },
        err => {}
      );
  }

  selectOne(id) {
    let sp = this.products.filter(it => it.id == id);
    if (sp.length > 0) {
      this.activeProduct = sp[0];

      this.jumpTo.emit(this.activeProduct);
    }
  }
}
