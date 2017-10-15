import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-my-activity-list',
  templateUrl: './my-activity-list.component.html',
  styleUrls: ['./my-activity-list.component.scss']
})
export class MyActivityListComponent implements OnInit {

  types = [
    { label: '产品', value: '', checked: true },
    { label: '项目', value: '', checked: true },
    { label: '需求', value: '', checked: true },
    { label: '任务', value: '', checked: true },
    { label: '问题', value: '', checked: true },
    { label: '测试', value: '', checked: true },
    { label: '待办', value: '', checked: true },
    { label: '文档', value: '', checked: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
