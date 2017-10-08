import { NzMessageService } from 'ng-zorro-antd';
import { ProjectApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Pagination } from 'app/common/core';
import { Project, Requirement } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-requirement-link',
  templateUrl: './project-requirement-link.component.html',
  styleUrls: ['./project-requirement-link.component.scss']
})
export class ProjectRequirementLinkComponent implements OnInit {

  project: Project;

  data: Pagination<Requirement>;
  selection: Requirement[];
  loading;

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '优先级', tpl: 'priority' },
    { title: '需求名称', tpl: 'name' },
    { title: '所属计划', data: 'planName' },
    { title: '创建者', data: 'createdByDisplayName' },
    { title: '预计(时)', data: 'estimate', defaultValue: '-', styleClass: 'text-center' },
    { title: '状态', tpl: 'status', styleClass: 'text-center' },
    { title: '阶段', tpl: 'stage', styleClass: 'text-center' },
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
    this.projectApi.getRequirementNotLinked(this.project.id).subscribe(
      data => {
        this.data = data;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

  link() {
    if (!this.selection || this.selection.length == 0) {
      this.message.warning('请选择要关联的需求');
      return;
    }

    let reqIds = this.selection.map(it => it.id);
    this.projectApi.linkRequirements(this.project.id, reqIds).subscribe(
      ok => {
        this.message.success('关联需求成功');
        this.loadData();
      },
      err => {
        this.message.error('关联需求失败');
      }
    );
  }
}
