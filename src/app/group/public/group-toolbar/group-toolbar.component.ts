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
      { title: '用户', routerLink: ['user'] },
      { title: '部门', routerLink: ['dept'] },
      { title: '待办', routerLink: ['todo'] },
      { title: '日志', routerLink: ['log'] },
      { title: '权限', routerLink: ['permission'] },
      { title: '公司', routerLink: ['company'] },
      { title: '动态', routerLink: ['activity'] },
    ];
  }

}
