import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, forwardRef, Input } from '@angular/core';

@Component({
  selector: 'pms-requirement-select',
  templateUrl: './requirement-select.component.html',
  styleUrls: ['./requirement-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RequirementSelectComponent),
    multi: true
  }]
})
export class RequirementSelectComponent implements OnInit, ControlValueAccessor {

  @Input() productId;
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
