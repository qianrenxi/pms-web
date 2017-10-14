import { NzMessageService } from 'ng-zorro-antd';
import { ProductApiService, TestTaskApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-test-task-add',
  templateUrl: './test-task-add.component.html',
  styleUrls: ['./test-task-add.component.scss']
})
export class TestTaskAddComponent implements OnInit {

  productId: number;

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private testTaskApi: TestTaskApiService,
    private productApi: ProductApiService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');
  }

  onSave(event) {
    let value = event.value;
    value['product'] = { id: this.productId };

    this.testTaskApi.create(value).subscribe(
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
