import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-dashboard-toolbar',
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.scss']
})
export class DashboardToolbarComponent implements OnInit {

  _navs;

  constructor() { }

  ngOnInit() {
    this._navs = [
      // { title: '首页', routerLink: ['my', 'requirement'] },
      { title: '待办', routerLink: ['my', 'todo'] },
      { title: '日志', routerLink: ['my', 'effort'] },
      { title: '任务', routerLink: ['my', 'task'] },
      { title: '问题', routerLink: ['my', 'issue'] },
      { title: '测试', routerLink: ['my', 'testTask'] },
      { title: '需求', routerLink: ['my', 'requirement'] },
      { title: '项目', routerLink: ['my', 'project'] },
      { title: '动态', routerLink: ['my', 'activity'] },
      { title: '档案', routerLink: ['my', 'profile'] },
    ];
  }

}
