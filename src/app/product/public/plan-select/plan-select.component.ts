import { Plan } from 'app/common/entity';
import { ProductApiService } from 'app/common/api';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input, forwardRef } from '@angular/core';

@Component({
  selector: 'pms-plan-select',
  templateUrl: './plan-select.component.html',
  styleUrls: ['./plan-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlanSelectComponent),
      multi: true
    }
  ]
})
export class PlanSelectComponent implements OnInit, ControlValueAccessor {

  @Input() productId: number;
  @Input() disabled: boolean;

  _value: number;
  _plans: Plan[];

  stagePlans: Plan[];

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(private productApi: ProductApiService) { }

  ngOnInit() {
    this.loadOptions();
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

  clear() {
    this._value = null;
    this._plans = null;
    this.onChange(this._value);
  }

  loadOptions() {
    if (!this.productId) {
      this.clear();
    }

    this.productApi.plans(this.productId).subscribe(
      plans => {
        this._plans = plans.content;
        this.stagePlans = plans.content;
      }
    );
  }

  searchChange(v) {
    if (this.stagePlans) {
      this._plans = this.stagePlans.filter(it => it.name.includes(v));
    }
  }
}
