import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Requirement } from './../../../common/entity/requirement';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-requirement-change',
  templateUrl: './product-requirement-change.component.html',
  styleUrls: ['./product-requirement-change.component.scss']
})
export class ProductRequirementChangeComponent implements OnInit {

  requirement: Requirement;

  requirementForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private message: NzMessageService,
    private requirementApi: RequirementApiService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {requirement: Requirement}) => {
      this.requirement = data.requirement;
      this.initForm();
    })
  }

  initForm () {
    if (!this.requirement) {
      this.requirementForm = null;
      return false;
    }

    let entity = this.requirement || new Requirement();
    this.requirementForm = this.fb.group({
      'assignTo.id': [entity.assignToId],
      'needReview': [entity.needReview],
      name: [entity.name],
      description: [entity.description],
      acceptance: [entity.acceptance],
      remark: [],
    });
  }

  getFormControl(name) {
    return this.requirementForm.controls[name];
  }

  markAsDirty() {
    for (let key of Object.keys(this.requirementForm.controls)) {
      this.requirementForm.controls[key].markAsDirty();
    }
  }

  onSave(event) {
    if (!this.requirementForm.dirty) {
      this.message.warning('你没有做任何修改');
      this.backView();
      return;
    }

    // this.markAsDirty();


    if (!this.requirementForm.valid) {
      this.message.error('需求变更表单填写有误，请根据提示改正后重试');
      return ;
    }

    let value = this.requirementForm.value;
    value['assignTo'] = value['assignTo.id'] ? {id: value['assignTo.id']} : null;

    this.requirementApi.change(this.requirement.id, value).subscribe(
      req => {
        this.message.success('需求变更成功');
        this.requirement.version = req.version;
        this.requirement.name = req.name;
        this.requirement.description = req.description;
        this.requirement.acceptance = req.acceptance;
        this.requirement.assignToId = req.assignToId;
        this.requirement.assignToDisplayName = req.assignToDisplayName;
        this.backView();
      },
      err => {
        this.message.error('需求变更失败，请重试');
      }
    );
  }

  backView() {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }
}
