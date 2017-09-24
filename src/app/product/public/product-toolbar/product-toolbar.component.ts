import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-toolbar',
  templateUrl: './product-toolbar.component.html',
  styleUrls: ['./product-toolbar.component.scss']
})
export class ProductToolbarComponent implements OnInit {

  activeProduct;

  constructor() { }

  ngOnInit() {
    this.activeProduct = {id: 1};
  }

  get navs() {
    if (this.activeProduct) {
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
