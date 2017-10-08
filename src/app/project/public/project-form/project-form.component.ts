import { Project } from 'app/common/entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  @Input() project: Project;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  projectForm: FormGroup;

  _types = [
    { value: 'DEVELOPING', label: '研发', disabled: false },
    { value: 'IMPLEMENT', label: '实施', disabled: false },
    { value: 'OPERATIONS', label: '运维', disabled: false },
  ];

  _accessControls = [
    { value: 'PUBLIC', label: '默认设置(有项目视图权限，即可访问)', disabled: false },
    { value: 'PRIVATE', label: '私有项目(只有项目相关负责人和项目团队成员才能访问)', disabled: false },
    { value: 'CUSTOM', label: '自定义白名单(团队成员和白名单的成员可以访问)', disabled: true },
  ];

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


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let entity = this.project || new Project();
    this.projectForm = this.fb.group({
      name: [entity.name, Validators.required],
      code: [entity.code, Validators.required],
      startDate: [new Date(entity.startDate) || new Date(), Validators.required],
      endDate: [new Date(entity.endDate), Validators.required],
      workingDays: [entity.workingDays],
      teamName: [entity.teamName],
      type: [entity.type],
      description: [entity.description],
      productId: [entity.productId],
      accessControl: [entity.accessControl || 'PUBLIC']
    });
  }

  getFormControl(name) {
    return this.projectForm.controls[name];
  }

  markAsDirty() {
    for (let key of Object.keys(this.projectForm.controls)) {
      this.projectForm.controls[key].markAsDirty();
    }
  }

  _save(event) {
    this.markAsDirty();

    if (this.projectForm.valid) {
      this.save.emit({ originalEvent: event, value: this.projectForm.value });
    }
  }

  _cancel(event) {
    this.cancel.emit({ originalEvent: event });
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
