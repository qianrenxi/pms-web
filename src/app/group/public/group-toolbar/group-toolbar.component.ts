import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-group-toolbar',
  templateUrl: './group-toolbar.component.html',
  styleUrls: ['./group-toolbar.component.scss']
})
export class GroupToolbarComponent implements OnInit {

  _navs;

  constructor() { }

  ngOnInit() {
    this._navs = [
      // { title: '首页', routerLink: ['my', 'requirement'] },
      { title: '用户', routerLink: ['my', 'todo'] },
      { title: '部门', routerLink: ['my', 'effort'] },
      { title: '待办', routerLink: ['my', 'task'] },
      { title: '日志', routerLink: ['my', 'issue'] },
      { title: '权限', routerLink: ['my', 'testTask'] },
      { title: '公司', routerLink: ['my', 'requirement'] },
      { title: '动态', routerLink: ['my', 'project'] },
    ];
  }

}
