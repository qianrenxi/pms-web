import { ProjectOperateDialogService } from './../../public/project-operate-dialog/project-operate-dialog.service';
import { ProjectApiService } from './../../../common/api/project-api.service';
import { Column } from 'consoleui';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  data;
  columns: Column[] = [
    { title: '项目名称', tpl: 'name' },
    { title: '项目代码', data: 'code' },
    // { title: '项目负责人', tpl: 'projectLeader' },
    { title: '截止日期', tpl: 'endDate' },
    { title: '项目状态', tpl: 'status' },
    { title: '总预计', data: 'estimateTotal', defaultValue: 0, styleClass: 'text-center' },
    { title: '总消耗', data: 'expendTotal', defaultValue: 0, styleClass: 'text-center' },
    { title: '总剩余', data: 'surplusTotal', defaultValue: 0, styleClass: 'text-center' },
    { title: '进度', tpl: 'progress', styleClass: 'text-center' },
    { title: '燃尽图', tpl: 'burnDownChart', styleClass: 'text-center' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private projectApi: ProjectApiService, private projectOperate: ProjectOperateDialogService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.projectApi.getAllOfPage().subscribe(
      data => {
        this.data = data
      }
    );
  }

  start(project) {
    this.projectOperate.openStart(project, () => {
      this.loadData();
    });
  }

  delay(project) {
    this.projectOperate.openDelay(project, () => {
      this.loadData();
    });
  }

  pause(project) {
    this.projectOperate.openPause(project, () => {
      this.loadData();
    });
  }

  close(project) {
    this.projectOperate.openClose(project, () => {
      this.loadData();
    });
  }

}
