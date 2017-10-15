import { Component, OnInit } from '@angular/core';
import { Pagination } from 'app/common/core';
import { Requirement } from 'app/common/entity';
import { Column } from 'consoleui';
import { Router, ActivatedRoute } from '@angular/router';
import { RequirementApiService } from 'app/common/api/requirement-api.service';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'pms-my-requirement-list',
  templateUrl: './my-requirement-list.component.html',
  styleUrls: ['./my-requirement-list.component.scss']
})
export class MyRequirementListComponent implements OnInit {

  data: Pagination<Requirement>;
  selection: Requirement[];
  loading;

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '优先级', tpl: 'priority' },
    { title: '所属产品', data: 'productName' },
    { title: '需求名称', tpl: 'name' },
    { title: '所属计划', data: 'planName' },
    { title: '创建者', data: 'createdByDisplayName' },
    { title: '指派给', data: 'assignToDisplayName' },
    { title: '预计(时)', data: 'estimate', defaultValue: '-', styleClass: 'text-center' },
    { title: '状态', tpl: 'status', styleClass: 'text-center' },
    { title: '阶段', tpl: 'stage', styleClass: 'text-center' },
    { title: '任务数', data: 'taskCount', defaultValue: 0, styleClass: 'text-center' },
    { title: '问题数', data: 'issueCount', defaultValue: 0, styleClass: 'text-center' },
    { title: '用例数', data: 'caseCount', defaultValue: 0, styleClass: 'text-center' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private requirementApi: RequirementApiService,
    private message: NzMessageService, private modal: NzModalService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
  }
}
