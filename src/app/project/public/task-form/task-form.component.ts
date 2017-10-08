import { Task } from 'app/common/entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Input() task: Task;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let entity = this.task || new Task();

    this.taskForm = this.fb.group({
      type: [entity.type, Validators.required],
      assignedToId: [entity.assignedToId],
      requirementId: [entity.requirementId],
      name: [entity.name, Validators.required],
      priority: [entity.priority],
      estimate: [entity.estimate],
      description: [entity.description],
      estimateStarted: [entity.estimateStarted],
      deadline: [entity.deadline],
    });
  }

  getFormControl(name) {
    return this.taskForm.controls[name];
  }

  markAsDirty() {
    for (let key of Object.keys(this.taskForm.controls)) {
      this.taskForm.controls[key].markAsDirty();
    }
  }

  _save() {
    this.markAsDirty();

    if (this.taskForm.valid) {
      this.save.emit({ originalEvent: event, value: this.taskForm.value });
    }
  }

  _cancel(event) {
    this.cancel.emit({ originalEvent: event });
  }


  _startValueChange = (startValue) => {
    let endValue = this.getFormControl('deadline').value;
    if (startValue > endValue) {
      this.getFormControl('deadline').setValue(null);
    }
  };
  _endValueChange = (endValue) => {
    let startValue = this.getFormControl('estimateStarted').value;
    if (startValue > endValue) {
      this.getFormControl('estimateStarted').setValue(null);
    }
  };
  _disabledStartDate = (startValue) => {
    let endValue = this.getFormControl('deadline').value;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.getTime() >= endValue.getTime();
  };
  _disabledEndDate = (endValue) => {
    let startValue = this.getFormControl('estimateStarted').value;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.getTime() <= startValue.getTime();
  };
}
