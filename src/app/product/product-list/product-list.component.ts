import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BASE_URL } from '../../mock/mock-config';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { PaginationModel } from '../../lib/pagination/pagination.model';

@Component({
  selector: 'pms-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  columns;
  datas;
  pagination: PaginationModel;

  constructor(private http: Http) { }

  ngOnInit() {
    this.columns = [
      { title: 'ID', prop: 'id' },
      { title: '产品名称', prop: 'name' },
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

    let prodListUrl = BASE_URL + '/products';
    this.http.get(prodListUrl)
      .toPromise().then(res => {
        this.datas = res.json().products;
        console.log(this.datas);
      }).catch(() => {
        console.log('Get mock prods failed.');
      });

    this.pagination = new PaginationModel (95, 15, 5);
  }

}
