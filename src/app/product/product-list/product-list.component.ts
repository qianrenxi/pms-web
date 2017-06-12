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
      { title: 'ID', prop: 'id' },
      { title: '产品名称', prop: 'name', tpl: 'pName' },
      { title: '产品负责人', prop: 'productLeader.name' },
      { title: '激活需求', prop: 'requirementActivedCount' },
      { title: '已变更需求', prop: 'requirementChangedCount' },
      { title: '草稿需求', prop: 'requirementDraftCount' },
      { title: '计划数', prop: 'planCount' },
      { title: '发布数', prop: 'publishCount' },
      { title: '相关BUG', prop: 'bugCount' },
      { title: '未解决BUG', prop: 'bugCount' },
      { title: '未指派BUG', prop: 'bugCount' },
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
