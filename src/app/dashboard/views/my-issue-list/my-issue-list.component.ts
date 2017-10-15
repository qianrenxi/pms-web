import { Component, OnInit } from '@angular/core';
import { Pagination } from 'app/common/core';
import { Issue } from 'app/common/entity';
import { Column } from 'consoleui';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { IssueApiService } from 'app/common/api';
import { IssueOperateDialogService } from './../../../test/public/issue-operate-dialog/issue-operate-dialog.service';

@Component({
  selector: 'pms-my-issue-list',
  templateUrl: './my-issue-list.component.html',
  styleUrls: ['./my-issue-list.component.scss']
})
export class MyIssueListComponent implements OnInit {

  data: Pagination<Issue>;
  selection: Issue;
  loading: boolean;
  // 还有很多列这里没有设置，需要做自定义列
  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '级别', data: 'severity' },
    { title: '优先级', data: 'priority' },
    { title: '问题标题', tpl: 'name' },
    { title: '状态', tpl: 'status' },
    { title: '创建', data: 'createdByDisplayName' },
    { title: '创建日期', tpl: 'createdDate' },
    { title: '指派给', data: 'assignedToDisplayName' },
    { title: '解决', data: 'resolvedByDisplayName' },
    { title: '方案', tpl: 'solution' },
    { title: '解决日期', tpl: 'resolvedDate' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService,
    private issueApi: IssueApiService, private issueOperate: IssueOperateDialogService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // this.loading = true;
  }


  operate(issue: Issue, operate: string) {
    this.issueOperate.open(issue, operate);
  }
}
