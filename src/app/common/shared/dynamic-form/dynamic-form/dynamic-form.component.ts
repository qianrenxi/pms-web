import { Component, OnInit, Input } from '@angular/core';
import { BaseField } from '../fields/base-field';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from '../field-control.service';

@Component({
  selector: 'pms-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: BaseField<any>[] = [];
  form: FormGroup;

  constructor(private fieldControlService: FieldControlService) { }

  ngOnInit() {
    this.form = this.fieldControlService.toFormGroup(this.fields);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
