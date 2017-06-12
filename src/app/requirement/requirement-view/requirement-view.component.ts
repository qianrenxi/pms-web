import { Component, OnInit } from '@angular/core';

import { Requirement } from '../../entity/requirement';
import { RequirementService } from '../../service/requirement.service';

@Component({
  selector: 'pms-requirement-view',
  templateUrl: './requirement-view.component.html',
  styleUrls: ['./requirement-view.component.scss']
})
export class RequirementViewComponent implements OnInit {
  requirement: Requirement;
  errorMsg: any;

  constructor(private requirementService: RequirementService) { }

  ngOnInit() {
    this.requirement = new Requirement();

    this.requirementService.getRequirement(1)
      .subscribe(
        requirement => this.requirement = requirement,
        error => this.errorMsg = error
      );
  }

}
