import { TestSuiteApiService } from 'app/common/api';
import { ProductApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { TestSuite } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-test-suite-list',
  templateUrl: './test-suite-list.component.html',
  styleUrls: ['./test-suite-list.component.scss']
})
export class TestSuiteListComponent implements OnInit {

  productId: number;

  data: Pagination<TestSuite>;
  selection: TestSuite[];
  loading;

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '名称', data: 'name' },
    { title: '描述', data: 'description' },
    { title: '创建者', data: 'createdByDisplayName' },
    { title: '创建时间', data: 'createdDate' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private productApi: ProductApiService,
    private testSuiteApi: TestSuiteApiService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');

    if (this.productId) {
      this.loadData();
    }
  }

  loadData() {
    this.loading = true;
    this.productApi.getTestSuites(this.productId).subscribe(
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
