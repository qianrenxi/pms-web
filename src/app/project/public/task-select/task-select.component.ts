import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, Input, forwardRef } from '@angular/core';

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

  @Input() projectId;

  @Input() disabled;

  _value;
  // ngModel access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor() { }

  ngOnInit() {
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
}
