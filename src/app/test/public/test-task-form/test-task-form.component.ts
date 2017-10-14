import { FormGroup, FormBuilder } from '@angular/forms';
import { TestTask } from 'app/common/entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-test-task-form',
  templateUrl: './test-task-form.component.html',
  styleUrls: ['./test-task-form.component.scss']
})
export class TestTaskFormComponent implements OnInit {

  @Input() testTask: TestTask;
  @Input() productId: number;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  _form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let m = this.testTask || new TestTask();
    this._form = this.fb.group({
      projectId: [m.projectId],
      buildId: [m.buildId],
      leaderId: [m.leaderId],
      priority: [m.priority],
      startDate: [m.startDate],
      endDate: [m.endDate],
      status: [m.status],
      name: [m.name],
      description: [m.description],
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
