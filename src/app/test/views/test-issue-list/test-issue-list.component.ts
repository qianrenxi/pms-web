import { IssueApiService } from 'app/common/api';
import { ProductApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Issue } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Component, OnInit } from '@angular/core';

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
    { title: '问题标题', data: 'name' },
    { title: '状态', data: 'status' },
    { title: '创建', data: 'createdByDisplayName' },
    { title: '创建日期', data: 'createdDate' },
    { title: '指派给', data: 'assignedToDisplayName' },
    { title: '解决', data: 'resolvedByDisplayName' },
    { title: '方案', data: 'solution' },
    { title: '解决日期', data: 'resolvedDate' },
    { title: '操作', tpl: 'actions' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private productApi: ProductApiService,
    private issueApi: IssueApiService) { }

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

}
