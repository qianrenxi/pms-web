import { Component, OnInit } from '@angular/core';
import { User } from 'app/common/entity';
import { Pagination } from 'app/common';
import { Column } from 'consoleui';
import { UserApiService } from 'app/common/api';

@Component({
  selector: 'pms-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Pagination<User>;
  selection: User[];
  loading: boolean = false;
  columns: Column[] = [
    {title: 'ID', data: 'id'},
    {title: '姓名', data: 'displayName'},
    {title: '用户名', data: 'username'},
    {title: '职位', data: 'post.name'},
    {title: '邮箱', data: 'email'},
    {title: '性别', data: 'sex'},
    {title: '电话', data: 'phoneNumber'},
    {title: 'QQ', data: 'qicq'},
    {title: '入职日期', data: 'startDate'},
    {title: '最后登录', data: 'lastLoginTime'},
    {title: '访问次数', data: 'loginTimes'},
    {title: '操作', tpl: 'actions', styleClass: 'text-right'},
  ];

  constructor(
    private userApi: UserApiService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(page?, params?) {
    this.loading = true;
    this.userApi.getAllOfPage(params, page).subscribe(
      data => {
        this.users = data;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

}
