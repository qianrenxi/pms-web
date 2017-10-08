import { NzMessageService } from 'ng-zorro-antd';
import { BuildApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Project, Build } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-build-edit',
  templateUrl: './project-build-edit.component.html',
  styleUrls: ['./project-build-edit.component.scss']
})
export class ProjectBuildEditComponent implements OnInit {

  project: Project;
  build: Build;

  constructor(private router: Router, private route: ActivatedRoute,
    private buildApi: BuildApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { project: Project, build: Build }) => {
      this.project = data.project;
      this.build = data.build;
    })
  }

  onSave(event) {
    let value = event.value;
    value['id'] = this.build.id;
    value['product'] = { id: this.project.productId };
    value['project'] = { id: this.project.id };
    value['buildedBy'] = value['buildedById'] ? { id: value['buildedById'] } : null;

    this.buildApi.update(value).subscribe(
      ok => {
        this.message.success('修改构建成功');
        this.toList();
      },
      err => {
        this.message.error('修改构建失败');
      }
    );
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
