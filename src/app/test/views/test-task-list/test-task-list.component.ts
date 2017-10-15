import { TestTaskApiService } from 'app/common/api';
import { ProductApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Pagination } from 'app/common/core';
import { TestTask } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-test-task-list',
  templateUrl: './test-task-list.component.html',
  styleUrls: ['./test-task-list.component.scss']
})
export class TestTaskListComponent implements OnInit {

  productId: number;

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
    private message: NzMessageService, private productApi: ProductApiService,
    private testTaskApi: TestTaskApiService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');

    if (this.productId) {
      this.loadData();
    }
  }

  loadData() {
    this.loading = true;
    this.productApi.getTestTasks(this.productId).subscribe(
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
