import { NzMessageService } from 'ng-zorro-antd';
import { ProjectApiService } from './../../../common/api/project-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Pagination } from 'app/common/core';
import { Requirement, Project } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-requirement-list',
  templateUrl: './project-requirement-list.component.html',
  styleUrls: ['./project-requirement-list.component.scss']
})
export class ProjectRequirementListComponent implements OnInit {

  project: Project;

  data: Pagination<Requirement>;
  selection: Requirement[];
  loading: boolean;

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '优先级', tpl: 'priority' },
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
    private projectApi: ProjectApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {project: Project}) => {
      this.project = data.project;
      this.loadData();
    });
  }

  loadData() {
    this.loading = true;
    this.projectApi.getRequirementLinked(this.project.id).subscribe(
      data => {
        this.data = data;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

  unlink(reqId?: number) {
    if (!reqId && (!this.selection || this.selection.length == 0)) {
      this.message.warning('请选择要解除关联的需求');
      return;
    }

    let reqIds = reqId ? [reqId] : this.selection.map(it => it.id);
    this.projectApi.unlinkRequirements(this.project.id, reqIds).subscribe(
      ok => {
        this.message.success('解除关联需求成功');
        this.loadData();
      },
      err => {
        this.message.error('解除关联需求失败');
      }
    );
  }
}
