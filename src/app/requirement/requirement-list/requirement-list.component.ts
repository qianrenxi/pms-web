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
      {title: 'ID', data: 'id'},
      {title: '需求名称', data: 'name', tpl: 'nameCol'},
      {title: '计划', data: 'plan.name'},
      // {title: '创建', data: 'createdBy.displayName'},
      // {title: '指派', data: ''},
      {title: '优先级', data: 'priority'},
      {title: '预估(H)', data: 'estimate'},
      {title: '状态', data: 'status'},
      {title: '阶段', data: 'stage'},
    ];

    this.pagination = new PaginationModel (95, 15, 5);

    this.requirementService.getRequirements(this.filter)
      .subscribe(
        requirements => this.requirements = requirements,
        err => this.errorMsg = err
      );
  }

}
