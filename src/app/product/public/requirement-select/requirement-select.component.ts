import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { Requirement } from 'app/common/entity';
import { ProductApiService, ProjectApiService } from 'app/common/api';

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

  @Input() productControl: FormControl;
  @Input() projectControl: FormControl;

  @Input() productId;
  @Input() projectId;

  @Input() disabled;

  requirements: Requirement[];

  _value;
  // ngModel access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(private productApi: ProductApiService, private projectApi: ProjectApiService) { }

  ngOnInit() {
    this.loadData();

    if (this.productControl) {
      this.productControl.valueChanges.subscribe(
        productId => {
          if (this.productId != productId) {
            // if (this.projectControl)
            this.productId = productId;
            this.projectId = null;
            this._value = null;
            this.onChange(this._value);
            this.loadData();
          }
        }
      );
    }

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
      this.projectApi.getRequirementLinked(this.projectId).subscribe(
        data => {
          this.requirements = data.content;
        }
      );
    } else if (this.productId) {
      this.productApi.requirements(this.productId).subscribe(
        data => {
          this.requirements = data.content
        }
      );
    }
  }
}
