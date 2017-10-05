import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plan } from 'app/common/entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.scss']
})
export class PlanFormComponent implements OnInit {

  @Input() productName: string;
  @Input() plan: Plan;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  planForm: FormGroup;

  _DURITIONS = [
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
    this.productName = this.productName || (this.plan ? this.plan.productName : '');

    this.initForm();
  }

  initForm() {
    let entity = this.plan || new Plan();
    this.planForm = this.fb.group({
      name: [entity.name, Validators.required],
      startDate: [entity.startDate || new Date(), Validators.required],
      endDate: [entity.endDate, Validators.required],
      description: [entity.description]
    });
  }

  getFormControl(name) {
    return this.planForm.controls[name];
  }

  markAsDirty() {
    for (let key of Object.keys(this.planForm.controls)) {
      this.planForm.controls[key].markAsDirty();
    }
  }

  _save(event) {
    this.markAsDirty();

    if (this.planForm.valid) {
      this.save.emit({originalEvent: event, value: this.planForm.value});
    }
  }

  _cancel(event) {
    this.cancel.emit({originalEvent: event});
  }
}
