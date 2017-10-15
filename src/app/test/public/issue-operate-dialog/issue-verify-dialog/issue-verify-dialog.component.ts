import { Component, OnInit, Input } from '@angular/core';
import { Issue } from 'app/common/entity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalSubject } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
import { IssueApiService } from 'app/common/api';

@Component({
  selector: 'pms-issue-verify-dialog',
  templateUrl: './issue-verify-dialog.component.html',
  styleUrls: ['./issue-verify-dialog.component.scss']
})
export class IssueVerifyDialogComponent implements OnInit {

  actionName = '确认';

  @Input() issue: Issue;

  _form: FormGroup;

  constructor(private fb: FormBuilder, private subject: NzModalSubject,
    private message: NzMessageService, private issueApi: IssueApiService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let m = this.issue;
    this._form = this.fb.group({
      assignedToId: [m.assignedToId],
      type: [m.type],
      priority: [m.priority],
      remark: [],
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
    this.markAsDirty();

    if (this._form.valid) {
      this.issueApi['verify'](this.issue.id, this._form.value).substrice(
        ok => {
          this.message.success(`${this.actionName}成功`);
          this.subject.destroy('onOk');
        },
        err => {
          this.message.error(`${this.actionName}失败`);
        }
      );
    }
  }

  onCancel() {
    this.subject.destroy('onCancel');
  }

}
