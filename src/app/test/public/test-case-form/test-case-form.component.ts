import { FormGroup, FormBuilder } from '@angular/forms';
import { TestCase } from 'app/common/entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-test-case-form',
  templateUrl: './test-case-form.component.html',
  styleUrls: ['./test-case-form.component.scss']
})
export class TestCaseFormComponent implements OnInit {

  @Input() testCase: TestCase;
  @Input() productId: number;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  _form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let m = this.testCase || new TestCase();

    this._form = this.fb.group({
      id: [m.id],
      productId: [m.productId],
      moduleId: [m.moduleId],
      type: [m.type],
      stage: [m.stage],
      requirementId: [m.requirementId],
      name: [m.name],
      priority: [m.priority],
      precondition: [m.precondition],
      keywords: [m.keywords],
      steps: [m.steps],
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
