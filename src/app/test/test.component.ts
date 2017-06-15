import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product';

@Component({
  selector: 'pms-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  activeProduct: Product = {id: 1, name: 'Test Product', code: 'TP-01'};

  constructor() { }

  ngOnInit() {
  }

  changeProduct(product) {
    this.activeProduct = product;
  }
}
