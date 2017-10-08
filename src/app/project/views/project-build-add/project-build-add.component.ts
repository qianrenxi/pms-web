import { Product } from 'app/common/entity/product';
import { Project } from 'app/common/entity';
import { NzMessageService } from 'ng-zorro-antd';
import { BuildApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-build-add',
  templateUrl: './project-build-add.component.html',
  styleUrls: ['./project-build-add.component.scss']
})
export class ProjectBuildAddComponent implements OnInit {

  project: Project;

  constructor(private router: Router, private route: ActivatedRoute,
    private buildApi: BuildApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {project: Project}) => {
      this.project = data.project;
    })
  }

  onSave(event) {
    let value = event.value;
    value['product'] = {id: this.project.productId};
    value['project'] = {id: this.project.id};
    value['buildedBy'] = value['buildedById'] ? {id: value['buildedById']} : null;

    this.buildApi.create(value).subscribe(
      ok => {
        this.message.success('添加构建成功');
        this.toList();
      },
      err => {
        this.message.error('添加构建失败');
      }
    );
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
