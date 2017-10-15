import { Component, OnInit } from '@angular/core';
import { Pagination } from 'app/common/core';
import { TestTask } from 'app/common/entity';
import { Column } from 'consoleui';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TestTaskApiService } from 'app/common/api';

@Component({
  selector: 'pms-my-test-task-list',
  templateUrl: './my-test-task-list.component.html',
  styleUrls: ['./my-test-task-list.component.scss']
})
export class MyTestTaskListComponent implements OnInit {

  data: Pagination<TestTask>;
  selection: TestTask[];
  loading;

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '名称', tpl: 'name' },
    { title: '所属产品', data: 'productName' },
    { title: '所属项目', data: 'projectName' },
    { title: '版本', data: 'buildName' },
    { title: '负责人', data: 'leaderDisplayName' },
    { title: '开始日期', tpl: 'startDate' },
    { title: '结束日期', tpl: 'endDate' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService,
    private testTaskApi: TestTaskApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // this.loading = true;

  }
}
