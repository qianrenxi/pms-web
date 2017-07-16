import { Component, OnInit } from '@angular/core';

import { Plan } from '../../entity/plan';
import { PlanService } from '../../service/plan.service';

import { PaginationModel } from '../../lib';

@Component({
  selector: 'pms-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  plans: Plan[];
  columns;
  pagination;

  constructor(
    private planService: PlanService
  ) { }

  ngOnInit() {
    this.planService.getPlans()
      .subscribe(
        plans => this.plans = plans,
        error => {}
      );

    this.columns = [
      {title: 'ID', data: 'id'},
      {title: '名称', data: 'name', tpl: 'colName'},
      {title: '描述', data: 'description | substring(20)'},
      {title: '开始日期', data: 'startDate', formate: ''},
      {title: '结束日期', data: 'endDate', formate: ''},
    ];

    this.pagination = new PaginationModel(12, 15, 1);
  }

}
