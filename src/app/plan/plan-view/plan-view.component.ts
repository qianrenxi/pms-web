import { Component, OnInit } from '@angular/core';

import { Plan } from '../../entity/plan';
import { PlanService } from '../../service/plan.service';

@Component({
  selector: 'pms-plan-view',
  templateUrl: './plan-view.component.html',
  styleUrls: ['./plan-view.component.scss']
})
export class PlanViewComponent implements OnInit {
  plan: Plan;

  constructor(
    private planService: PlanService
  ) { }

  ngOnInit() {
    this.plan = new Plan();

    this.planService.getPlan(1).subscribe(
      plan => this.plan = plan,
      erro => {}
    );
  }

}
