import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-report-toolbar',
  templateUrl: './report-toolbar.component.html',
  styleUrls: ['./report-toolbar.component.scss']
})
export class ReportToolbarComponent implements OnInit {

  _navs;

  constructor() { }

  ngOnInit() {
    this._navs = [
      // { title: '首页', routerLink: ['my', 'requirement'] },
      { title: '产品', routerLink: ['my', 'todo'] },
      { title: '项目', routerLink: ['my', 'effort'] },
      { title: '测试', routerLink: ['my', 'task'] },
      { title: '组织', routerLink: ['my', 'issue'] },
      { title: '自定义', routerLink: ['my', 'testTask'] },
    ];
  }
}
