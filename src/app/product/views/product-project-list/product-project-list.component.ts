import { Router, ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'app/common/api';
import { Column } from 'consoleui';
import { Project } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Product } from 'app/common/entity/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-project-list',
  templateUrl: './product-project-list.component.html',
  styleUrls: ['./product-project-list.component.scss']
})
export class ProductProjectListComponent implements OnInit {

  product: Product;

  projects: Project[];
  columns: Column[] = [
    { title: '项目名称', tpl: 'name' },
    { title: '项目代码', data: 'code' },
    { title: '截止日期', tpl: 'endDate' },
    { title: '项目状态', tpl: 'status' },
    { title: '总预计', data: 'estimateTotal', styleClass: 'text-center' },
    { title: '总消耗', data: 'expendTotal', styleClass: 'text-center' },
    { title: '总剩余', data: 'surplusTotal', styleClass: 'text-center' },
    { title: '进度', tpl: 'progress', styleClass: 'text-center' },
    { title: '燃尽图', tpl: 'burnDownChart', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private productApi: ProductApiService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { product: Product }) => {
      this.product = data.product;
      this.loadData();
    });
  }

  loadData() {
    this.productApi.projects(this.product.id).subscribe(
      projects => {
        this.projects = projects;
        this.projects.push({
          id: 1, name: '企业培训管理系统同', code: 'sfsdfs', startDate: new Date(), endDate: new Date()
        });
      }
    );
  }
}
