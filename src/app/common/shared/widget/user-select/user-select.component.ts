import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/common/entity';
import { UserApiService } from 'app/common/api';

@Component({
  selector: 'pms-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UserSelectComponent,
      multi: true
    }
  ]
})
export class UserSelectComponent implements OnInit, ControlValueAccessor {

  @Input() groupId: number;
  @Input() multiple: boolean;

  isDisabled;
  _value: number | number[];

  _users: User[];
  _loading: boolean;

  // ngModel access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(private userApi: UserApiService) { }

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
    this.isDisabled = isDisabled;
  }

  searchChange(text) {
    this._loading = true;
    this.userApi.getAllOfPage({username: text}).subscribe(
      data => {
        this._users = data.content;
        this._loading = false;
      },
      err => {
        this._loading = false;
      }
    );
  }

}
