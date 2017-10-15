import { IssueApiService } from 'app/common/api';
import { ProductApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Issue } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Component, OnInit } from '@angular/core';
import { IssueOperateDialogService } from './../../public/issue-operate-dialog/issue-operate-dialog.service';

@Component({
  selector: 'pms-test-issue-list',
  templateUrl: './test-issue-list.component.html',
  styleUrls: ['./test-issue-list.component.scss']
})
export class TestIssueListComponent implements OnInit {

  productId: number;

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
    private message: NzMessageService, private productApi: ProductApiService,
    private issueApi: IssueApiService, private issueOperate: IssueOperateDialogService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');

    if (this.productId) {
      this.loadData();
    }
  }

  loadData() {
    this.loading = true;
    this.productApi.getIssues(this.productId).subscribe(
      data => {
        this.data = data
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }


  operate(issue: Issue, operate: string) {
    this.issueOperate.open(issue, operate);
  }

}
