import { NzMessageService } from 'ng-zorro-antd';
import { ProductApiService } from 'app/common/api';
import { TestCaseApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-test-case-add',
  templateUrl: './test-case-add.component.html',
  styleUrls: ['./test-case-add.component.scss']
})
export class TestCaseAddComponent implements OnInit {
  productId: number;

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private caseApi: TestCaseApiService,
    private productApi: ProductApiService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');
  }

  onSave(event) {
    let value = event.value;
    value['product'] = { id: this.productId };
    value['module'] = value['moduleId'] ? { id: value['moduleId'] } : null;
    value['requirement'] = value['requirementId'] ? { id: value['requirementId'] } : null;

    this.caseApi.create(value).subscribe(
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
