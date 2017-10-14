import { FormGroup, FormBuilder } from '@angular/forms';
import { TestSuite } from 'app/common/entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-test-suite-form',
  templateUrl: './test-suite-form.component.html',
  styleUrls: ['./test-suite-form.component.scss']
})
export class TestSuiteFormComponent implements OnInit {

  @Input() testSuite: TestSuite;
  @Input() productId: number;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  _form: FormGroup;

  _accessControls = [
    {value: 'PUBLIC', label: '公开(有产品视图权限，即可访问)', disabled: false},
    {value: 'PRIVATE', label: '私有(仅自己可见)', disabled: false},
    // {value: 'CUSTOM', label: '自定义白名单(团队成员和白名单的成员可以访问)', disabled: true},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let m = this.testSuite || new TestSuite();
    this._form = this.fb.group({
      name: [m.name],
      description: [m.description],
      accessControl: [m.accessControl],
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
      return;
    }

    this.save.emit({ originalEvent: event, value: this._form.value });
  }

  _cancel(event) {
    this.cancel.emit({ originalEvent: event });
  }

}
