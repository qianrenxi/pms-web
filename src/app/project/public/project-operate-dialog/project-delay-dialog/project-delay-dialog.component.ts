import { ProjectApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { NzModalSubject } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-project-delay-dialog',
  templateUrl: './project-delay-dialog.component.html',
  styleUrls: ['./project-delay-dialog.component.scss']
})
export class ProjectDelayDialogComponent implements OnInit {

  @Input() project: Project;

  delayForm: FormGroup;

  _duritions = [
    { value: 'ONE_WEEK', label: '一周', disabled: false },
    { value: 'TOW_WEEK', label: '两周', disabled: false },
    { value: 'ONE_MONTH', label: '一个月', disabled: false },
    { value: 'TOW_MONTH', label: '两个月', disabled: false },
    { value: 'THREE_MONTH', label: '三个月', disabled: false },
    { value: 'HALF_YEAR', label: '半年', disabled: false },
    { value: 'ONE_YEAR', label: '一年', disabled: false },
    { value: 'TOW_YEAR', label: '两年', disabled: false },
  ];


  constructor(private subject: NzModalSubject, private fb: FormBuilder,
    private projectApi: ProjectApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let entity = this.project;
    this.delayForm = this.fb.group({
      startDate: [new Date(entity.startDate), Validators.required],
      endDate: [new Date(entity.endDate), Validators.required],
      workingDays: [entity.workingDays],
      remark: []
    });
  }

  getFormControl(name) {
    return this.delayForm.controls[name];
  }

  onOk(event) {
    this.projectApi.delay(this.project.id, this.delayForm.value).subscribe(
      ok => {
        this.message.success('操作成功');
        this.subject.destroy('onOk');
      },
      err => {
        this.message.error('操作失败');
      }
    );
  }

  onCancel(event) {
    this.subject.destroy('onCancel');
  }

  _startValueChange = (startValue) => {
    let endValue = this.getFormControl('endDate').value;
    if (startValue > endValue) {
      this.getFormControl('endDate').setValue(null);
    }
  };
  _endValueChange = (endValue) => {
    let startValue = this.getFormControl('startDate').value;
    if (startValue > endValue) {
      this.getFormControl('startDate').setValue(null);
    }
  };
  _disabledStartDate = (startValue) => {
    let endValue = this.getFormControl('endDate').value;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.getTime() >= endValue.getTime();
  };
  _disabledEndDate = (endValue) => {
    let startValue = this.getFormControl('startDate').value;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.getTime() <= startValue.getTime();
  };
}
