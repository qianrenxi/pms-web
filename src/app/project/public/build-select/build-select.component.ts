import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, Input, forwardRef } from '@angular/core';

@Component({
  selector: 'pms-build-select',
  templateUrl: './build-select.component.html',
  styleUrls: ['./build-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuildSelectComponent),
      multi: true
    }
  ]
})
export class BuildSelectComponent implements OnInit, ControlValueAccessor {

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
