import { Component, OnInit } from '@angular/core';

import { PaginationModel } from '../../lib';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'pms-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  columns;
  datas;
  pagination: PaginationModel;
  errorMsg;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.columns = [
      { title: 'ID', data: 'id' },
      { title: '产品名称', data: 'name', tpl: 'pName' },
      { title: '产品负责人', data: 'productLeader.name' },
      { title: '激活需求', data: 'requirementActivedCount' },
      { title: '已变更需求', data: 'requirementChangedCount' },
      { title: '草稿需求', data: 'requirementDraftCount' },
      { title: '计划数', data: 'planCount' },
      { title: '发布数', data: 'publishCount' },
      { title: '相关BUG', data: 'bugCount' },
      { title: '未解决BUG', data: 'bugCount' },
      { title: '未指派BUG', data: 'bugCount' },
    ];

    this.productService.getProducts().subscribe(
      products => this.datas = products,
      error => this.errorMsg = error
    );

    this.pagination = new PaginationModel (95, 15, 5);
  }

  edit(id) {
    console.log('Edit' + id);
  }
}
