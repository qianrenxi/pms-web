import { ProductApiService } from 'app/common/api';
import { Product } from 'app/common/entity/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-test-toolbar',
  templateUrl: './test-toolbar.component.html',
  styleUrls: ['./test-toolbar.component.scss']
})
export class TestToolbarComponent implements OnInit {

  products: Product[];
  activeProductId;
  activeProduct;

  _navs;

  constructor(private productApi: ProductApiService) { }

  ngOnInit() {
    this.productApi.getAllOfPage().subscribe(
      data => {
        this.products = data.content;
        this.activeProductId = this.products && this.products.length > 0 ? this.products[0].id : null;
        this.onSelectChange();
      }
    );
  }

  updateNavs() {
    if (this.activeProduct) {
      this._navs = [
        { title: '问题', routerLink: ['./', this.activeProduct.id, 'issue'] },
        { title: '用例', routerLink: ['./', this.activeProduct.id, 'case'] },
        { title: '版本', routerLink: ['./', this.activeProduct.id, 'testTask'] },
        { title: '套件', routerLink: ['./', this.activeProduct.id, 'suite'] },
        { title: '报告', routerLink: ['./', this.activeProduct.id, 'report'] },
        { title: '用例库', routerLink: ['./', this.activeProduct.id, 'suiteLib'], disabled: true},
      ];
    }
  }

  onSelectChange() {
    this.activeProduct = this.products.find(it => it.id == this.activeProductId);
    this.updateNavs();
  }
}
