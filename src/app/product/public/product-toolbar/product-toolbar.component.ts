import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../common/api/product-api.service';
import { Product } from '../../../common/entity/product';

@Component({
  selector: 'pms-product-toolbar',
  templateUrl: './product-toolbar.component.html',
  styleUrls: ['./product-toolbar.component.scss']
})
export class ProductToolbarComponent implements OnInit {

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
        { title: '需求', routerLink: ['./', this.activeProduct.id, 'requirement'] },
        { title: '活动', routerLink: ['./', this.activeProduct.id, 'activity'] },
        { title: '计划', routerLink: ['./', this.activeProduct.id, 'plan'] },
        { title: '发布', routerLink: ['./', this.activeProduct.id, 'release'] },
        { title: '路线', routerLink: ['./', this.activeProduct.id, 'line'] },
        { title: '文档', routerLink: ['./', this.activeProduct.id, 'docLib'] },
        { title: '项目', routerLink: ['./', this.activeProduct.id, 'project'] },
        { title: '模块', routerLink: ['./', this.activeProduct.id, 'module'] },
        { title: '概览', routerLink: ['./', this.activeProduct.id, 'overview'] },
      ];
    }
  }

  onSelectChange() {
    this.activeProduct = this.products.find(it => it.id == this.activeProductId);
    this.updateNavs();
  }

}
