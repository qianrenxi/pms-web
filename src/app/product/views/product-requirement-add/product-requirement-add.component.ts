import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { RequirementFormComponent } from './../../public/requirement-form/requirement-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ProductApiService } from './../../../common/api/product-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pms-product-requirement-add',
  templateUrl: './product-requirement-add.component.html',
  styleUrls: ['./product-requirement-add.component.scss']
})
export class ProductRequirementAddComponent implements OnInit {

  @ViewChild(RequirementFormComponent) rff: RequirementFormComponent;

  constructor(private requirementApi: RequirementApiService, private message: NzMessageService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSave(event) {
    let value = event.value;
    let isNext = event.isNext;

    value['product'] = value['product.id'] ? {id: value['product.id']} : null;
    value['module'] = value['module.id'] ? {id: value['module.id']} : null;
    value['plan'] = value['plan.id'] ? {id: value['plan.id']} : null;
    value['assignTo'] = value['assignTo.id'] ? {id: value['assignTo.id']} : null;

    this.requirementApi.create(value).subscribe(
      ok => {
        this.message.success('添加需求成功');
        if (isNext) {
          // clear form
          this.rff.initForm();
        } else {
          this.toList();
        }
      }
    );
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
