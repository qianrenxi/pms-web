import { NzMessageService } from 'ng-zorro-antd';
import { TaskApiService } from './../../../common/api/task-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-task-add',
  templateUrl: './project-task-add.component.html',
  styleUrls: ['./project-task-add.component.scss']
})
export class ProjectTaskAddComponent implements OnInit {
  projectId: number;

  constructor(private router: Router, private route: ActivatedRoute,
    private taskApi: TaskApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.projectId = +this.route.snapshot.paramMap.get('projectId');
  }

  onSave(event) {
    let value = event.value;
    value['project'] = this.projectId ? {id: this.projectId} : null;
    value['assignedTo'] = value['assignedToId'] ? {id: value['assignedToId']} : null;
    value['requirement'] = value['requirementId'] ? {id: value['requirementId']} : null;

    this.taskApi.create(value).subscribe(
      ok => {
        this.message.success('添加任务成功');
        this.toList();
      },
      err => {
        this.message.error('添加任务失败');
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
