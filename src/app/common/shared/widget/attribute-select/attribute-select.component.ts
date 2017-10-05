import { AttributeApiService } from './../../../api/attribute-api.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-attribute-select',
  templateUrl: './attribute-select.component.html',
  styleUrls: ['./attribute-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AttributeSelectComponent,
      multi: true
    }
  ]
})
export class AttributeSelectComponent implements OnInit, ControlValueAccessor {

  @Input() group: string;
  @Input() code: string;
  @Input() disabled: boolean;

  _value;
  _attr;

  // ngModel access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(private attrApi: AttributeApiService) { }

  ngOnInit() {
    this.attrApi.getAttribute(this.group, this.code).subscribe(
      attr => {
        this._attr = attr;
      }
    );
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
