import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../../entity/issue';
import { PaginationModel } from 'consoleui';
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
      {title: 'ID', data: 'id'},
      {title: '问题标题', data: 'name', tpl: 'nameColTpl'},
      {title: '级别', data: ''},
      {title: '优先级', data: ''},
      {title: '状态', data: ''},
      {title: '截止日期', data: ''},
      {title: '创建者', data: ''},
      {title: '指派给', data: ''},
      {title: '解决者', data: ''},
      {title: '方案', data: ''},
    ];

    this.issueService.getIssues().subscribe(
      issues => this.issues = issues
    );

    this.pagination = new PaginationModel(40, 15, 1);
  }

}
