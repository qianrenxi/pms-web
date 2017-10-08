import { NzMessageService } from 'ng-zorro-antd';
import { ProjectApiService, BuildApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Build } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-build-list',
  templateUrl: './project-build-list.component.html',
  styleUrls: ['./project-build-list.component.scss']
})
export class ProjectBuildListComponent implements OnInit {

  projectId: number;

  builds: Build[];
  selection: Build[];
  loading: boolean;

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '产品', tpl: 'product' },
    { title: '名称编号', tpl: 'name' },
    { title: '源代码地址', data: 'repositoryUrl' },
    { title: '下载地址', data: 'downloadUrl' },
    { title: '构建日期', tpl: 'buildedDate' },
    { title: '构建者', data: 'buildedByDisplayName' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private projectApi: ProjectApiService, private buildApi: BuildApiService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.projectId = +this.route.snapshot.paramMap.get("projectId");
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.projectApi.getBuilds(this.projectId).subscribe(
      data => {
        this.builds = data;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

  delete(buildId?: number) {
    if (!buildId && (!this.selection || this.selection.length == 0)) {
      this.message.warning('请选择要删除的项');
      return ;
    }

    let buildIds = buildId ? [buildId] : this.selection.map(it => it.id);
    this.buildApi.delete(buildIds).subscribe(
      ok => {
        this.message.success('删除成功');
        this.loadData();
      },
      err => {
        this.message.error('删除失败');
      }
    );
  }
}
