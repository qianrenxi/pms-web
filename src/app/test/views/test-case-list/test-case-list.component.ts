import { ProductApiService } from 'app/common/api';
import { TestCaseApiService } from './../../../common/api/test-case-api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { TestCase } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-test-case-list',
  templateUrl: './test-case-list.component.html',
  styleUrls: ['./test-case-list.component.scss']
})
export class TestCaseListComponent implements OnInit {

  productId: number;

  data: Pagination<TestCase>;
  selection: TestCase[];
  loading: boolean;

  columns: Column[] = [
    {title: 'ID', data: 'id'},
    {title: '优先级', data: 'priority'},
    {title: '用例名称', data: 'name'},
    {title: '类型', data: 'type'},
    {title: '创建者', data: 'createdByDisplayName'},
    {title: '执行人', data: ''},
    {title: '执行时间', data: ''},
    {title: '结果', data: 'result'},
    {title: '状态', data: 'status'},
    {title: '问题数', data: ''},
    {title: '执行次数', data: ''},
    {title: '步骤数', data: ''},
    {title: '操作', tpl: 'actions'},
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private caseApi: TestCaseApiService,
    private productApi: ProductApiService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');
    if (this.productId) {
      this.loadData();
    }
  }

  loadData() {
    this.loading = true;
    this.productApi.getTestCases(this.productId).subscribe(
      data => {
        this.data = data;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

}
