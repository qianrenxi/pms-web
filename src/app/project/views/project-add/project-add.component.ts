import { ProjectApiService } from './../../../common/api/project-api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private projectApi: ProjectApiService) { }

  ngOnInit() {
  }

  onSave(event) {
    let value = event.value;
    value['product'] = value['productId'] ? {id: value['productId']} : null;

    this.projectApi.create(value).subscribe(
      ok => {
        this.message.success('添加项目成功');
        this.toList();
      },
      err => {
        this.message.error('添加项目失败，请重试');
      }
    );
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    this.router.navigate(['../list'], {relativeTo: this.route});
  }
}
