import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../common/api/product-api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Product } from '../../../common/entity/product';
import { Pagination } from '../../../common/core/entity/pagination';
import { Column } from 'consoleui';

@Component({
  selector: 'pms-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data: Pagination<Product>;
  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '产品名称', data: 'name' },
    { title: '产品代码', data: 'code' },
    { title: '产品负责人', data: 'productLeader.displayName' },
    { title: '激活需求', data: '' },
    { title: '已变更需求', data: '' },
    { title: '草稿需求', data: '' },
    { title: '计划数', data: '' },
    { title: '发布数', data: '' },
    { title: '相关BUG', data: '' },
    { title: '未解决BUG', data: '' },
    { title: '未指派BUG', data: '' },
    { title: '操作', data: '', styleClass: 'text-right' },
  ];
  loading: boolean;

  constructor(private productApi: ProductApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.productApi.getAllOfPage().subscribe(
      data => {
        this.data = data;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }


}
