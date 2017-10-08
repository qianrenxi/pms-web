import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Build } from 'app/common/entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-build-form',
  templateUrl: './build-form.component.html',
  styleUrls: ['./build-form.component.scss']
})
export class BuildFormComponent implements OnInit {

  @Input() build: Build;
  @Input() productName: string;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  _form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let entity = this.build || new Build();
    this._form = this.fb.group({
      id: [entity.id],
      name: [entity.name, Validators.required],
      buildedById: [entity.buildedById, Validators.required],
      buildedDate: [entity.buildedDate || new Date(), Validators.required],
      repositoryUrl: [entity.repositoryUrl],
      downloadUrl: [entity.downloadUrl],
      description: [entity.description],
    });
  }

  getFormControl(name) {
    return this._form.controls[name];
  }

  markAsDirty() {
    for (let key of Object.keys(this._form.controls)) {
      this._form.controls[key].markAsDirty();
    }
  }

  _save(event) {
    this.markAsDirty();

    if (this._form.valid) {
      this.save.emit({ originalEvent: event, value: this._form.value });
    }
  }

  _cancel(event) {
    this.cancel.emit({ originalEvent: event });
  }

}
