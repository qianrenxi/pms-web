import { TestStep } from './../../../common/entity/test-step';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      action: [m.action, [Validators.required, Validators.pattern(/\s{0,}[\S]{1,}[\s\S]{0,}/)]],
      expect: [m.expect],
      actually: [m.actually],
      result: [m.result],
      type: [m.type || 'ITEM']
    });
  }

  checkInput() {

  }

  _valueChange(fm: FormGroup, key: string, v: any) {
    // fm.controls[key].setValue(v);
    // fm.controls[key].markAsDirty();
    let control = fm.controls[key];
    if (!control || control.value == v) {
      return;
    } else {
      control.setValue(v);
    }
    // console.log(this._forms.filter(it => it.valid));
    this._valuesChange();
  }

  _valuesChange() {
    let value = this._forms.filter(it => it.valid).map((it, index) => {
      let val = it.value;
      val['step'] = index + 1;
      return val;
    });
    this._value = value;
    this.onChange(this._value);
  }

  appendRow(index?) {
    let f = this.initForm();
    if (index && index >= 0 && index < this._forms.length - 1) {
      this._forms.splice(index + 1, 0, f);
    } else {
      this._forms.push(f);
    }
  }

  removeRow(index) {
    // this._forms = this._forms.filter((it, idx) => idx != index);
    this._forms.splice(index, 1);
    this._valuesChange();
  }
}
