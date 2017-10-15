import { Component, OnInit, Input } from '@angular/core';
import { Issue } from 'app/common/entity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalSubject, NzMessageService } from 'ng-zorro-antd';
import { IssueApiService } from 'app/common/api';

@Component({
  selector: 'pms-issue-time-dialog',
  templateUrl: './issue-time-dialog.component.html',
  styleUrls: ['./issue-time-dialog.component.scss']
})
export class IssueTimeDialogComponent implements OnInit {

  @Input() issue: Issue;

  _form: FormGroup;

  constructor(private fb: FormBuilder, private subject: NzModalSubject,
    private message: NzMessageService, private issueApi: IssueApiService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this._form = this.fb.group({
      markDate: [],
      hours: [],
      activity: [],
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
    this.markAsDirty();

    if (this._form.valid) {
      this.issueApi['markTime'](this.issue.id, this._form.value).substrice(
        ok => {
          this.message.success('登记工时成功');
          this.subject.destroy('onOk');
        },
        err => {
          this.message.error('登记工时失败');
        }
      );
    }
  }

  onCancel() {
    this.subject.destroy('onCancel');
  }
}
