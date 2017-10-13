import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TestCaseApiService } from 'app/common/api';
import { TestCase } from 'app/common/entity';

@Component({
  selector: 'pms-test-case-edit',
  templateUrl: './test-case-edit.component.html',
  styleUrls: ['./test-case-edit.component.scss']
})
export class TestCaseEditComponent implements OnInit {

  productId: number;
  testCase: TestCase;

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private caseApi: TestCaseApiService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');
    this.route.data.subscribe((data: { testCase: TestCase }) => {
      this.testCase = data.testCase;
    });
  }

  onSave(event) {
    let value = event.value;
    value['product'] = { id: this.productId };
    value['module'] = value['moduleId'] ? { id: value['moduleId'] } : null;
    value['requirement'] = value['requirementId'] ? { id: value['requirementId'] } : null;

    this.caseApi.update(value).subscribe(
      ok => {
        this.message.success('保存成功');
        this.toList();
      },
      err => {
        this.message.error('保存失败');
      }
    );
  }

  onCancel(event) { }

  toList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
