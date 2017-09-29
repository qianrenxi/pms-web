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

  constructor(private productApi: ProductApiService) { }

  ngOnInit() {
    this.productApi.getAllOfPage().subscribe(
      data => {
        this.products = data.content;
        this.activeProductId = this.products && this.products.length > 0 ? this.products[0].id : null;
      }
    );
  }

  get navs() {
    if (this.activeProductId) {
      this.activeProduct = this.products.find(it => it.id == this.activeProductId);
      return [
        { title: '需求', routerLink: ['/product', this.activeProduct.id, 'requirements'] },
        { title: '活动', routerLink: ['/product', this.activeProduct.id, 'activities'] },
        { title: '计划', routerLink: ['/product', this.activeProduct.id, 'plans'] },
        { title: '发布', routerLink: ['/product', this.activeProduct.id, 'release'] },
        { title: '路线', routerLink: ['/product', this.activeProduct.id, 'lines'] },
        { title: '文档', routerLink: ['/product', this.activeProduct.id, 'docLibs'] },
        { title: '项目', routerLink: ['/product', this.activeProduct.id, 'projects'] },
        { title: '模块', routerLink: ['/product', this.activeProduct.id, 'modules'] },
        { title: '概览', routerLink: ['/product', this.activeProduct.id, 'view'] },
      ];
    }
  }

}
