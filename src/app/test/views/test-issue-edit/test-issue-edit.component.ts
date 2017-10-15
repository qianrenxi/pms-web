import { Component, OnInit } from '@angular/core';
import { Issue } from 'app/common/entity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { IssueApiService } from 'app/common/api';

@Component({
  selector: 'pms-test-issue-edit',
  templateUrl: './test-issue-edit.component.html',
  styleUrls: ['./test-issue-edit.component.scss']
})
export class TestIssueEditComponent implements OnInit {

  issue: Issue;

  _form: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private message: NzMessageService,
    private issueApi: IssueApiService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { issue: Issue }) => {
      this.issue = data.issue;
      this.initForm();
    })
  }

  initForm() {
    let m = this.issue || new Issue();
    this._form = this.fb.group({
      productId: [m.productId],
      moduleId: [m.moduleId],
      projectId: [m.projectId],
      effectBuildId: [m.effectBuildId],
      assignedToId: [m.assignedToId],
      deadline: [m.deadline],
      type: [m.type],
      system: [m.system],
      browser: [m.browser],
      name: [m.name],
      severity: [m.severity],
      priority: [m.priority],
      description: [m.description],
      requirementId: [m.requirementId],
      taskId: [m.taskId],
      keyword: [m.keyword],
      planId: [m.planId],
      remark: [],
      status: [],
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

  save(event) {
    this.markAsDirty();

    if (this._form.invalid) {
      this.message.warning('表单信息有误，请更正后重试');
    }

    let value = this._form.value;
    value['id'] = this.issue.id;
    value['product'] = value['productId'] ? { id: value['productId'] } : null;
    value['module'] = value['moduleId'] ? { id: value['moduleId'] } : null;
    value['project'] = value['projectId'] ? { id: value['projectId'] } : null;
    // value['effectBuild'] = value['effectBuildId'] ? {id: value['effectBuildId']} : null;
    value['requirement'] = value['requirementId'] ? { id: value['requirementId'] } : null;
    value['task'] = value['taskId'] ? { id: value['taskId'] } : null;
    value['assignedTo'] = value['assignedToId'] ? { id: value['assignedToId'] } : null;

    this.issueApi.update(value).subscribe(
      ok => {
        this.message.success('保存成功');
        this.toView();
      },
      err => {
        this.message.error('保存失败');
      }
    );
  }

  cancel(event) {
    this.toView();
  }

  toView() {
    this.router.navigate(['../view'], { relativeTo: this.route });
  }

  toList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
