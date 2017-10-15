import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { Task } from 'app/common/entity';
import { ProjectApiService } from 'app/common/api';

@Component({
  selector: 'pms-task-select',
  templateUrl: './task-select.component.html',
  styleUrls: ['./task-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TaskSelectComponent),
    multi: true
  }]
})
export class TaskSelectComponent implements OnInit, ControlValueAccessor {

  @Input() projectControl: FormControl;
  @Input() projectId;

  @Input() disabled;

  tasks: Task[];

  _value;
  // ngModel access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(private projectApi: ProjectApiService) { }

  ngOnInit() {
    this.loadData();

    if (this.projectControl) {
      this.projectControl.valueChanges.subscribe(
        projectId => {
          if (this.projectId != projectId) {
            this.projectId = projectId;
            this._value = null;
            this.onChange(this._value);

            this.loadData();
          }
        }
      );
    }
  }

  writeValue(value: any): void {
    this._value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  loadData() {
    if (this.projectId) {
      this.projectApi.getTasks(this.projectId).subscribe(
        data => this.tasks = data.content
      );
    }
  }
}
