import { NzMessageService } from 'ng-zorro-antd';
import { Product } from 'app/common/entity/product';
import { PlanApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-plan-add',
  templateUrl: './product-plan-add.component.html',
  styleUrls: ['./product-plan-add.component.scss']
})
export class ProductPlanAddComponent implements OnInit {

  product: Product;

  constructor(private router: Router, private route: ActivatedRoute,
    private planApi: PlanApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {product: Product}) => {
      this.product = data.product;
    });
  }

  onSave(event) {
    let value = event.value;
    value['product'] = {id: this.product.id};
    this.planApi.create(value).subscribe(
      ok => {
        this.message.success('添加计划成功');
        this.toList();
      },
      err => {
        this.message.error('添加计划失败，请重试');
      }
    );
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
