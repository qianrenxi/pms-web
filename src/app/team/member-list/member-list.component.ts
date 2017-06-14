import { Component, OnInit } from '@angular/core';
import { PaginationModel } from '../../lib/pagination/pagination.model';

@Component({
  selector: 'pms-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  members = [];
  pagination = new PaginationModel(0, 15, 1);
  columns;

  constructor() { }

  ngOnInit() {
    this.columns = [
      {title: '用户', prop: 'user.name'},
      {title: '角色', prop: 'role.name'},
      {title: '添加人', prop: 'createdBy.name'},
      {title: '添加时间', prop: 'createdDate'},
      {title: '项目贡献工时', prop: ''},
    ];
  }

}
