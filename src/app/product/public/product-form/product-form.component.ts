import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../entity/product';
import { ProductService } from '../../../service/product.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'pms-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;

  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    if (!this.product) {
      // this.product = new Product();
    }
  }

  onSubmit(event) {
    this.submit.emit({originalEvent: event, product: this.product});
  }

  onCancel(event) {
    this.cancel.emit({originalEvent: event});
  }
}
