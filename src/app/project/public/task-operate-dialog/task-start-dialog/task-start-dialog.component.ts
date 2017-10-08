import { NzMessageService } from 'ng-zorro-antd';
import { TaskApiService } from 'app/common/api';
import { NzModalSubject } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'pms-task-start-dialog',
  templateUrl: './task-start-dialog.component.html',
  styleUrls: ['./task-start-dialog.component.scss']
})
export class TaskStartDialogComponent implements OnInit {

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
      actsureStarted: [entity.actsureStarted || new Date(), Validators.required],
      usedTime: [entity.usedTime, Validators.min(entity.usedTime)],
      leftTime: [entity.leftTime],
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
      this.taskApi.start(this.task.id, value).subscribe(
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
