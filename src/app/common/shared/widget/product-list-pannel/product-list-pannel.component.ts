import { Pagination } from 'app/common/core';
import { ProductApiService } from 'app/common/api';
import { Product } from 'app/common/entity/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-product-list-pannel',
  templateUrl: './product-list-pannel.component.html',
  styleUrls: ['./product-list-pannel.component.scss']
})
export class ProductListPannelComponent implements OnInit {

  @Input() params: any;
  @Input() size: number;

  @Input() width;
  @Input() height;
  @Input() color;

  products: Product[];

  _title: string;
  @Input() set title(val: string) {
    this._title = val;
  }

  constructor(private productApi: ProductApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let page = new Pagination<any>();
    page.size = this.size || 10;
    this.productApi.getAllOfPage(this.params, page).subscribe(
      data => {
        this.products = data.content;
      }
    );
  }

}
