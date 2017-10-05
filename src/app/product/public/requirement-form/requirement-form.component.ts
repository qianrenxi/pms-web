import { ProductApiService } from './../../../common/api/product-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Requirement } from './../../../common/entity/requirement';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.scss']
})
export class RequirementFormComponent implements OnInit {

  @Input() requirement: Requirement;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  requirementForm: FormGroup;

  _isCreate;
  _products = [];

  _productId: number = 1;

  constructor(private fb: FormBuilder, private productApi: ProductApiService) { }

  ngOnInit() {
    this.requirement = this.requirement || new Requirement();
    this._isCreate = !this.requirement.id;
    this.initForm();
  }

  initForm() {
    let entity = this.requirement || new Requirement();
    this.requirementForm = this.fb.group({
      'product.id': [entity.productId, Validators.required],
      'module.id': [entity.moduleId],
      'plan.id': [entity.planId],
      'assignTo.id': [entity.assignToId],
      source: [entity.source],
      sourceRemark: [entity.sourceRemark],
      name: [entity.name, Validators.required],
      priority: [entity.priority],
      estimate: [entity.estimate],
      description: [entity.description],
      acceptance: [entity.acceptance],
      keywords: [entity.keywords],
      needReview: [entity.needReview || true],
      tracking: []
    });

    this.productApi.getAllOfPage().subscribe(
      data => {
        this._products = data.content.map(it => ({ label: it.name, value: it.id, disabled: false }));
      }
    );
  }

  getFormControl(name) {
    return this.requirementForm.controls[name];
  }

  markDirty() {
    for (let key of Object.keys(this.requirementForm.controls)) {
      this.requirementForm.controls[key].markAsDirty();
    }
  }

  _save(event, isNext: boolean) {
    this.markDirty();

    if (this.requirementForm.valid) {
      let value = this.requirementForm.value;
      this.save.emit({ originalEvent: event, value: value, isNext: isNext });
    }
  }

  _cancel(event) {
    this.cancel.emit({ originalEvent: event });
  }
}
