import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'app/common/entity';
import { TaskApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-task-edit',
  templateUrl: './project-task-edit.component.html',
  styleUrls: ['./project-task-edit.component.scss']
})
export class ProjectTaskEditComponent implements OnInit {

  task: Task;

  _form: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private taskApi: TaskApiService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe((data: { task: Task }) => {
      this.task = data.task;

      this.initForm();
    })
  }

  initForm() {
    let entity = this.task || new Task();
    this._form = this.fb.group({
      projectId: [entity.projectId],
      moduleId: [],
      requirementId: [entity.requirementId], // no
      assignedToId: [entity.assignedToId],
      type: [entity.type],
      status: [entity.status],
      priority: [entity.priority],
      traking: [], // no

      estimateStarted: [entity.estimateStarted],
      actsureStarted: [entity.actsureStarted],
      deadline: [entity.deadline],
      estimate: [entity.estimate],
      usedTime: [entity.usedTime],  // no
      leftTime: [entity.leftTime],

      createdById: [], // no
      completedById: [entity.completedById],
      completedDate: [entity.completedDate],
      canceledById: [],
      canceledDate: [],
      closedById: [],
      closedReason: [],
      closedDate: [],

      name: [entity.name, Validators.required],
      description: [entity.description],
      remark: []
    });
  }

  getFormControl(name) {
    return this._form.controls[name];
  }

  markAsSirty() {
    for (let key of Object.keys(this._form.controls)) {
      this._form.controls[key].markAsDirty();
    }
  }

  onSave() {
    this.markAsSirty()

    if (this._form.valid) {
      let value = this._form.value;
      value['id'] = this.task.id;
      value['project.id'] = value['projectId'] ? value['projectId'] : null;
      value['module.id'] = value['moduleId'] ? value['moduleId'] : null;
      value['requirement.id'] = value['requirementId'] ? value['requirementId'] : null;
      value['assignedTo.id'] = value['assignedToId'] ? value['assignedToId'] : null;
      value['completedBy.id'] = value['completedById'] ? value['completedById'] : null;
      value['canceledBy.id'] = value['canceledById'] ? value['canceledById'] : null;
      value['closedBy.id'] = value['closedById'] ? value['closedById'] : null;

      this.taskApi.update(value).subscribe(
        ok => {
          this.message.success('修改任务成功');
          this.toView();
        },
        err => {
          this.message.error('修改任务失败，请重试');
        }
      );
    }
  }

  onCancel() {
    this.toView();
  }

  toView() {
    this.router.navigate(['../view'], { relativeTo: this.route });
  }

}
