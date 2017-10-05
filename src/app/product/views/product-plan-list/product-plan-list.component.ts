import { NzMessageService } from 'ng-zorro-antd';
import { Product } from 'app/common/entity/product';
import { PlanApiService, ProductApiService } from 'app/common/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Column } from 'consoleui';
import { Plan } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-plan-list',
  templateUrl: './product-plan-list.component.html',
  styleUrls: ['./product-plan-list.component.scss']
})
export class ProductPlanListComponent implements OnInit {

  product: Product;
  data: Pagination<Plan>;

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '名称', data: 'name', tpl: 'name' },
    { title: '描述', data: 'description' },
    { title: '开始日期', data: 'startDate', tpl: 'startDate' },
    { title: '结束日期', data: 'endDate', tpl: 'endDate' },
    { title: '操作', data: '', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private planApi: PlanApiService, private productApi: ProductApiService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { product: Product }) => {
      this.product = data.product;

      this.loadData();
    });
  }

  loadData() {
    let productId = this.product ? this.product.id : 0;
    this.productApi.plans(productId).subscribe(
      data => this.data = data
    );
  }

  delete(planId) {
    this.planApi.delete([planId]).subscribe(
      ok => {
        this.message.success('删除成功');
        this.loadData();
      },
      err => {
        this.message.error('删除失败，请重试');
      }
    );
  }

}
