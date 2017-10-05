import { NzMessageService } from 'ng-zorro-antd';
import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Requirement } from './../../../common/entity/requirement';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-requirement-review',
  templateUrl: './product-requirement-review.component.html',
  styleUrls: ['./product-requirement-review.component.scss']
})
export class ProductRequirementReviewComponent implements OnInit {

  requirement: Requirement;

  reviewForm: FormGroup;

  _REVIEW_RESULTS = [
    {value: 'PASS', label: '确认通过', disabled: false},
    {value: 'REVERT', label: '撤销变更', disabled: false},
    {value: 'CLARIFY', label: '有待明确', disabled: false},
    {value: 'REJECT', label: '拒绝', disabled: false},
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private requirementApi: RequirementApiService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {requirement: Requirement}) => {
      this.requirement = data.requirement;
      this.initForm();
    })
  }

  initForm() {
    if (this.requirement.version <= 1) {
      this._REVIEW_RESULTS.find(it => it.value == 'REVERT').disabled = true;
    }

    this.reviewForm = this.fb.group({
      reviewedDate: [new Date()],
      reviewedResult: ['PASS', Validators.required],
      assignToId: [this.requirement.assignToId],
      reviewedBy: [this.requirement.assignToId, Validators.required],
      remark: [],
    });
  }

  markAsDirty() {
    for (let key of Object.keys(this.reviewForm.controls)){
      this.reviewForm.controls[key].markAsDirty();
    }
  }

  onSave(event) {
    this.markAsDirty()

    if (!this.reviewForm.valid) {
      this.message.error('审核信息填写有误，请参照提示修正后重试');
      return;
    }

    this.requirementApi.review(this.requirement.id, this.reviewForm.value).subscribe(
      ok => {
        this.message.success('提交评审成功');
        this.toView();
      },
      err => {
        this.message.error('提交评审失败');
      }
    );
  }

  onCancel(event) {
    this.toView();
  }

  toView() {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }
}
