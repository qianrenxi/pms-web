import { Component, OnInit } from '@angular/core';

import { PaginationModel, CuiPagination } from 'consoleui';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'pms-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  columns;
  datas;
  pagination: CuiPagination;
  errorMsg;

  params: {};
  loading = true;

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

    this.loadData();
  }

  loadData(page?: CuiPagination) {
    this.pagination = page;

    this.loading = true;
    this.productService.getAllOfPage(this.params, this.pagination).subscribe(
      prods => {
        this.datas = prods.content;
        this.pagination = prods;
        this.loading = false;
      },
      error => {
        this.errorMsg = error;
        this.loading = false;
      }
    );
  }

  getAll() {
    this.params = {};
    if (this.pagination) {
      this.pagination.number = 0;
    }
    this.loadData();
  }

  getActive() {
    this.params = { status: 'ACTIVE' };
    if (this.pagination) {
      this.pagination.number = 0;
    }
    this.loadData();
  }

  getClosed() {
    this.params = { status: 'CLOSED' };
    if (this.pagination) {
      this.pagination.number = 0;
    }
    this.loadData();
  }
}
