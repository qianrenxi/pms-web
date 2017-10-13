import { TestStep } from './../../../common/entity/test-step';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, forwardRef, Input } from '@angular/core';

@Component({
  selector: 'pms-test-step-control',
  templateUrl: './test-step-control.component.html',
  styleUrls: ['./test-step-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestStepControlComponent),
      multi: true
    }
  ]
})
export class TestStepControlComponent implements OnInit, ControlValueAccessor {

  @Input() disabled: boolean;

  _value: TestStep[];

  // ng model access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  _forms: FormGroup[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  writeValue(value: any): void {
    this._value = value;
    this.initForms();
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

  initForms() {
    if (this._value && this._value.length > 0) {
      this._forms = this._value.map(it => this.initForm(it));
    } else {
      this._forms = [1, 2, 3].map(it => this.initForm());
    }
  }

  initForm(step?: TestStep) {
    let m = step || new TestStep();
    return this.fb.group({
      step: [m.step],
      action: [m.action],
      expect: [m.expect],
      actually: [m.actually],
      result: [m.result],
      type: [m.type]
    });
  }

  checkInput() {

  }
}
