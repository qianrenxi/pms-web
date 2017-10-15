import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ProjectApiService } from 'app/common/api';
import { Build } from 'app/common/entity';

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

  @Input() projectControl: FormControl;
  @Input() projectId;

  @Input() disabled;

  builds: Build[];

  _value;
  // ngModel access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(private projectApi: ProjectApiService) { }

  ngOnInit() {
    if (this.projectControl) {
      this.projectControl.valueChanges.subscribe(
        projectId => {
          if (this._value != projectId) {
            this.projectId = projectId;
            this._value = null;
            this.onChange(this._value);

            this.loadBuilds();
          }
        }
      );
    }

    this.loadBuilds();
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

  loadBuilds() {
    if (this.projectId) {
      this.projectApi.getBuilds(this.projectId).subscribe(
        builds => this.builds = builds
      );
    }
  }
}
