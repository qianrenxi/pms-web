import { Requirement } from 'app/common/entity';
import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { NzModalSubject, NzMessageService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-requirement-close-dialog',
  templateUrl: './requirement-close-dialog.component.html',
  styleUrls: ['./requirement-close-dialog.component.scss']
})
export class RequirementCloseDialogComponent implements OnInit {

  @Input() requirement: Requirement;

  closeForm: FormGroup;

  _CLOSE_REASONS = [
    { value: 'complete', label: '已完成', disabled: false },
    { value: 'subdivide', label: '已细分', disabled: false },
    { value: 'repeate', label: '重复', disabled: false },
    { value: 'delay', label: '延期', disabled: false },
    { value: 'ignore', label: '不做', disabled: false },
    { value: 'designSo', label: '设计如此', disabled: false },
  ];

  constructor(private fb: FormBuilder, private subject: NzModalSubject,
    private requirementApi: RequirementApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.closeForm = this.fb.group({
      reason: ['complete', Validators.required],
      remark: []
    });
  }

  onOk(event) {
    if (this.closeForm.valid && this.requirement) {
      this.requirementApi.close(this.requirement.id, this.closeForm.value).subscribe(
        ok => {
          this.message.success('关闭需求成功');
          this.subject.destroy('onOk');
        },
        err => {
          this.message.error('关闭需求失败，请重试');
        }
      );
    }
  }

  onCancel(event) {
    this.subject.destroy('onCancel');
  }
}
