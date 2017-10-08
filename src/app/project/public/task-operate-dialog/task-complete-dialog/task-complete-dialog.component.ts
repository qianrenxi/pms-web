import { NzMessageService } from 'ng-zorro-antd';
import { TaskApiService } from 'app/common/api';
import { NzModalSubject } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-task-complete-dialog',
  templateUrl: './task-complete-dialog.component.html',
  styleUrls: ['./task-complete-dialog.component.scss']
})
export class TaskCompleteDialogComponent implements OnInit {
  @Input() task: Task;

  _form: FormGroup;

  constructor(private fb: FormBuilder, private subject: NzModalSubject,
    private taskApi: TaskApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let entity = this.task || new Task();
    this._form = this.fb.group({
      usedTime: [entity.usedTime, [Validators.required, Validators.min(entity.usedTime)]],
      assignedToId: [entity.assignedToId, Validators.required],
      completedDate: [entity.completedDate || new Date(), Validators.required],
      completedById: [entity.completedById],
      remark: []
    });
  }

  getFormControl(name) {
    return this._form.controls[name];
  }

  markAsDirty() {
    for (let key of Object.keys(this._form.controls)) {
      this._form.controls[key].markAsDirty();
    }
  }

  onOk(event) {
    this.markAsDirty()

    if (this._form.valid) {
      let value = this._form.value;
      this.taskApi.complete(this.task.id, value).subscribe(
        ok => {
          this.message.success('操作成功');
          this.subject.destroy('onOk');
        },
        err => {
          this.message.error('操作失败');
        }
      );
    }
  }

  onCancel(event) {
    this.subject.destroy('onCancel');
  }

}
