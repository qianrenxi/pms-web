import { NzMessageService } from 'ng-zorro-antd';
import { BuildApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Pagination } from 'app/common/core';
import { Build, Requirement } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-build-requiement-list',
  templateUrl: './project-build-requiement-list.component.html',
  styleUrls: ['./project-build-requiement-list.component.scss']
})
export class ProjectBuildRequiementListComponent implements OnInit {

  // build: Build;
  buildId: number;

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
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private buildApi: BuildApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.buildId = +this.route.snapshot.paramMap.get('buildId');
    if (this.buildId) {
      this.loadData();
    }
  }

  loadData() {
    this.loading = true;
    this.buildApi.getRequirementLinked(this.buildId).subscribe(
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
    this.buildApi.unlinkRequirements(this.buildId, reqIds).subscribe(
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
