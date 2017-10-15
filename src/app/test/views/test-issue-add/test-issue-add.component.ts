import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { IssueApiService } from 'app/common/api';

@Component({
  selector: 'pms-test-issue-add',
  templateUrl: './test-issue-add.component.html',
  styleUrls: ['./test-issue-add.component.scss']
})
export class TestIssueAddComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private issueApi: IssueApiService) { }

  ngOnInit() {
  }

  onSave(event) {
    let value = event.value;
    value['product'] = value['productId'] ? {id: value['productId']} : null;
    value['module'] = value['moduleId'] ? {id: value['moduleId']} : null;
    value['project'] = value['projectId'] ? {id: value['projectId']} : null;
    // value['effectBuild'] = value['effectBuildId'] ? {id: value['effectBuildId']} : null;
    value['requirement'] = value['requirementId'] ? {id: value['requirementId']} : null;
    value['task'] = value['taskId'] ? {id: value['taskId']} : null;
    value['assignedTo'] = value['assignedToId'] ? {id: value['assignedToId']} : null;

    this.issueApi.create(value).subscribe(
      ok => {
        this.message.success('添加成功');
        this.toList();
      },
      err => {
        this.message.error('添加失败');
      }
    );
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
