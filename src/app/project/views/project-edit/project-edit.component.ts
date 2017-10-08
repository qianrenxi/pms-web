import { Project } from 'app/common/entity';
import { ProjectApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  project: Project;

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private projectApi: ProjectApiService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {project: Project}) => {
      this.project = data.project;
    })
  }

  onSave(event) {
    let value = event.value;
    value['id'] = this.project.id;
    value['product'] = value['productId'] ? {id: value['productId']} : null;

    this.projectApi.update(value).subscribe(
      ok => {
        this.message.success('修改项目成功');
        this.toView();
      },
      err => {
        this.message.error('修改项目失败，请重试');
      }
    );
  }

  onCancel(event) {
    this.toView();
  }

  toView() {
    this.router.navigate(['../overview'], {relativeTo: this.route});
  }
}
