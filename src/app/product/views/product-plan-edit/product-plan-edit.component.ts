import { NzMessageService } from 'ng-zorro-antd';
import { PlanApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'app/common/entity/product';
import { Component, OnInit } from '@angular/core';
import { Plan } from 'app/common/entity';

@Component({
  selector: 'pms-product-plan-edit',
  templateUrl: './product-plan-edit.component.html',
  styleUrls: ['./product-plan-edit.component.scss']
})
export class ProductPlanEditComponent implements OnInit {

  product: Product;
  plan: Plan;

  constructor(private router: Router, private route: ActivatedRoute,
    private planApi: PlanApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { product: Product, plan: Plan }) => {
      this.product = data.product;
      this.plan = data.plan;
    });
  }

  onSave(event) {
    let value = event.value;
    value['product'] = { id: this.product.id };
    value['id'] = this.plan.id;
    this.planApi.update(value).subscribe(
      ok => {
        this.message.success('修改计划成功');
        this.toList();
      },
      err => {
        this.message.error('修改计划失败，请重试');
      }
    );
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }


}
