import { RequirementFormComponent } from './../../public/requirement-form/requirement-form.component';
import { Requirement } from './../../../common/entity/requirement';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pms-product-requirement-copy',
  templateUrl: './product-requirement-copy.component.html',
  styleUrls: ['./product-requirement-copy.component.scss']
})
export class ProductRequirementCopyComponent implements OnInit {

  @ViewChild(RequirementFormComponent) rff: RequirementFormComponent;

  requirement: Requirement;

  constructor(private requirementApi: RequirementApiService, private message: NzMessageService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {requirement: Requirement}) => {
      this.requirement = data.requirement;
    });
  }

  onSave(event) {
    let value = event.value;
    let isNext = event.isNext;

    value['product'] = value['product.id'] ? {id: value['product.id']} : null;
    value['module'] = value['module.id'] ? {id: value['module.id']} : null;
    value['plan'] = value['plan.id'] ? {id: value['plan.id']} : null;
    value['assignTo'] = value['assignTo.id'] ? {id: value['assignTo.id']} : null;

    this.requirementApi.create(value).subscribe(
      requirement => {
        this.message.success('复制需求成功');
        if (isNext) {
          // clear form
          this.rff.initForm();
        } else {
          this.router.navigate(['../../', requirement.id, 'view'], {relativeTo: this.route});
        }
      }
    );
  }

  onCancel(event) {
    this.backView();
  }

  backView() {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }
}
