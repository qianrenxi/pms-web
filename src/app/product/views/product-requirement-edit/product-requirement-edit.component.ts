import { NzMessageService } from 'ng-zorro-antd';
import { Product } from 'app/common/entity/product';
import { ProductApiService } from './../../../common/api/product-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Requirement } from './../../../common/entity/requirement';
import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-requirement-edit',
  templateUrl: './product-requirement-edit.component.html',
  styleUrls: ['./product-requirement-edit.component.scss']
})
export class ProductRequirementEditComponent implements OnInit {

  product;
  requirement: Requirement;

  requirementForm: FormGroup;

  _products = [];

  constructor(private router: Router, private route: ActivatedRoute,
    private requirementApi: RequirementApiService, private productApi: ProductApiService,
    private fb: FormBuilder, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {product: Product, requirement: Requirement}) => {
      this.requirement = data.requirement;
      this.product = data.product;
      this.initForm();
    });
  }

  initForm() {
    let entity = this.requirement;
    this.requirementForm = this.fb.group({
      'product.id': [entity.productId, Validators.required],
      'module.id': [entity.moduleId],
      'plan.id': [entity.planId],
      'assignTo.id': [entity.assignToId],
      source: [entity.source],
      sourceRemark: [entity.sourceRemark],
      name: [entity.name],
      priority: [entity.priority],
      estimate: [entity.estimate],
      description: [entity.description],
      acceptance: [entity.acceptance],
      keywords: [entity.keywords],
      status: [entity.status],
      copyTo: [],
      remark: []
    });

    this.productApi.getAllOfPage().subscribe(
      data => {
        this._products = data.content.map(it => ({label: it.name, value: it.id, disabled: false}));
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
      value['id'] = this.requirement.id;
      this.requirementApi.update(value).subscribe(
        ok => {
          this.message.success('保存成功');
          this.toView();
        },
        err => {
          this.message.error('保存失败');
        }
      );
    }
  }

  _cancel(event) {
    this.toView();
  }

  toView() {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }
}
