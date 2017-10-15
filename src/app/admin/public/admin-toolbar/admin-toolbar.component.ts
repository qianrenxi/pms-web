import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {

  _navs;

  constructor() { }

  ngOnInit() {
    this._navs = [
      { title: '首页', routerLink: ['my', 'requirement'] },
      // { title: '插件', routerLink: ['my', 'todo'] },
      { title: '消息配置', routerLink: ['my', 'effort'] },
      { title: '自定义属性', routerLink: ['my', 'task'] },
      // { title: '回收站', routerLink: ['my', 'issue'] },
    ];
  }

}
