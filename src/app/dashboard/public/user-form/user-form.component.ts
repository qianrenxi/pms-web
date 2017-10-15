import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/common/entity';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pms-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;

  _form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let m = this.user || new User();
    this._form = this.fb.group({
      username: [],
      firstName: [],
      lastName: [],
      displayName: [],
      email: [],
      phoneNumber: [],
      language: [],
    });
  }

}
