import { Component, OnInit, Input } from '@angular/core';
import { BaseField } from '../fields/base-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pms-dynamic-form-item',
  templateUrl: './dynamic-form-item.component.html',
  styleUrls: ['./dynamic-form-item.component.scss']
})
export class DynamicFormItemComponent implements OnInit {
  @Input() field: BaseField<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  constructor() { }

  ngOnInit() {
  }

}
