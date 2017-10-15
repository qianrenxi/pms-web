import { Component, OnInit } from '@angular/core';
import { Pagination } from 'app/common/core';
import { Project } from 'app/common/entity';
import { Column } from 'consoleui';
import { ProjectApiService } from 'app/common/api';
import { ProjectOperateDialogService } from './../../../project/public/project-operate-dialog/project-operate-dialog.service';

@Component({
  selector: 'pms-my-project-list',
  templateUrl: './my-project-list.component.html',
  styleUrls: ['./my-project-list.component.scss']
})
export class MyProjectListComponent implements OnInit {

  data: Pagination<Project>;
  selection: Project[];
  loading;

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
}
