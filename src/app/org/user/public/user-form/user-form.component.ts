import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../entity/user';

@Component({
  selector: 'pms-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submit.emit(this.user);
  }

  onCancel() {
    this.cancel.emit();
  }
}
