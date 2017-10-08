import { NzMessageService } from 'ng-zorro-antd';
import { BuildApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Pagination } from 'app/common/core';
import { Build, Requirement } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-build-requiement-link',
  templateUrl: './project-build-requiement-link.component.html',
  styleUrls: ['./project-build-requiement-link.component.scss']
})
export class ProjectBuildRequiementLinkComponent implements OnInit {

  build: Build;

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
    private buildApi: BuildApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { build: Build }) => {
      this.build = data.build;
      this.loadData();
    });
  }

  loadData() {
    this.loading = true;
    this.buildApi.getRequirementNotLinked(this.build.id).subscribe(
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
    this.buildApi.linkRequirements(this.build.id, reqIds).subscribe(
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
