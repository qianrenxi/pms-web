import { Component, OnInit, Input } from '@angular/core';

import { PaginationModel } from '../../lib';

import { Requirement } from '../../entity/requirement';
import { RequirementService } from '../../service/requirement.service';

@Component({
  selector: 'pms-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.scss']
})
export class RequirementListComponent implements OnInit {

  @Input() filter: any;
  requirements: Requirement[];
  columns: any;
  pagination: any;
  errorMsg: any;

  constructor(private requirementService: RequirementService) { }

  ngOnInit() {
    this.columns = [
      {title: 'ID', prop: 'id'},
      {title: '需求名称', prop: 'name', tpl: 'nameCol'},
      {title: '计划', prop: 'plan.name'},
      // {title: '创建', prop: 'createdBy.displayName'},
      // {title: '指派', prop: ''},
      {title: '优先级', prop: 'priority'},
      {title: '预估(H)', prop: 'estimate'},
      {title: '状态', prop: 'status'},
      {title: '阶段', prop: 'stage'},
    ];

    this.pagination = new PaginationModel (95, 15, 5);

    this.requirementService.getRequirements(this.filter)
      .subscribe(
        requirements => this.requirements = requirements,
        err => this.errorMsg = err
      );
  }

}
