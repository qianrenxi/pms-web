import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ProductApiService } from 'app/common/api';
import { Project } from 'app/common/entity';

@Component({
  selector: 'pms-project-select',
  templateUrl: './project-select.component.html',
  styleUrls: ['./project-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectSelectComponent),
      multi: true
    }
  ]
})
export class ProjectSelectComponent implements OnInit, ControlValueAccessor {

  @Input() productControl: FormControl;
  @Input() productId;

  @Input() disabled;

  projects: Project[];

  _value;
  // ngModel access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(private productApi: ProductApiService) { }

  ngOnInit() {
    if (this.productControl) {
      this.productControl.valueChanges.subscribe(
        productId => {
          if (this.productId != productId) {
            this.productId = productId;
            this._value = null;
            this.onChange(this._value);

            this.loadPorjects();
          }
        }
      );
    }

    this.loadPorjects();
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

  loadPorjects() {
    if (this.productId) {
      this.productApi.projects(this.productId).subscribe(
        projs => this.projects = projs
      );
    }
  }
}
