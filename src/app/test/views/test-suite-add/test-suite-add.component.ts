import { NzMessageService } from 'ng-zorro-antd';
import { ProductApiService, TestSuiteApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-test-suite-add',
  templateUrl: './test-suite-add.component.html',
  styleUrls: ['./test-suite-add.component.scss']
})
export class TestSuiteAddComponent implements OnInit {

  productId: number;

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private testSuiteApi: TestSuiteApiService,
    private productApi: ProductApiService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');
  }

  onSave(event) {
    let value = event.value;
    value['product'] = { id: this.productId };

    this.testSuiteApi.create(value).subscribe(
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
