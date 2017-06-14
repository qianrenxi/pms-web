import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../../entity/issue';
import { PaginationModel } from '../../lib/pagination/pagination.model';
import { IssueService } from '../../service/issue.service';

@Component({
  selector: 'pms-issue-data-table',
  templateUrl: './issue-data-table.component.html',
  styleUrls: ['./issue-data-table.component.scss']
})
export class IssueDataTableComponent implements OnInit {
  @Input() filter: any;

  issues: Issue[];
  pagination: PaginationModel;
  columns;

  constructor(
    private issueService: IssueService
  ) { }

  ngOnInit() {
    this.columns = [
      {title: 'ID', prop: 'id'},
      {title: '问题标题', prop: 'name', tpl: 'nameColTpl'},
      {title: '级别', prop: ''},
      {title: '优先级', prop: ''},
      {title: '状态', prop: ''},
      {title: '截止日期', prop: ''},
      {title: '创建者', prop: ''},
      {title: '指派给', prop: ''},
      {title: '解决者', prop: ''},
      {title: '方案', prop: ''},
    ];

    this.issueService.getIssues().subscribe(
      issues => this.issues = issues
    );

    this.pagination = new PaginationModel(40, 15, 1);
  }

}
