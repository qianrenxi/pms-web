import { NzMessageService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Issue } from 'app/common/entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent implements OnInit {

  @Input() productId: number;
  @Input() issue: Issue;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  _form: FormGroup;

  constructor(private fb: FormBuilder, private message: NzMessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let m = this.issue || new Issue();
    this._form = this.fb.group({
      productId: [m.productId],
      moduleId: [m.moduleId],
      projectId: [m.projectId],
      effectBuildId: [m.effectBuildId],
      assignedToId: [m.assignedToId],
      deadline: [m.deadline],
      type: [m.type],
      system: [m.system],
      browser: [m.browser],
      name: [m.name],
      severity: [m.severity],
      priority: [m.priority],
      description: [m.description],
      requirementId: [m.requirementId],
      taskId: [m.taskId],
      keyword: [m.keyword],
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

  _save(event) {
    this.markAsDirty();

    if (this._form.invalid) {
      this.message.error('表单信息有误，请根据提示修改后重试');
      return;
    }

    this.save.emit({ originalEvent: event, value: this._form.value });
  }

  _cancel(event) {
    this.cancel.emit({ originalEvent: event });
  }
}
