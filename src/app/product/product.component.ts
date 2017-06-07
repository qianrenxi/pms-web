import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product';

@Component({
  selector: 'pms-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  activeProduct: Product = {id: 1, name: 'Test Product', code: 'TP-01'};

  constructor() { }

  ngOnInit() {
  }

}
