import { Component, OnInit } from '@angular/core';
import { Plan } from '../../../entity/plan';
import { PlanService } from '../../../service/plan.service';

@Component({
  selector: 'pms-plan-select',
  templateUrl: './plan-select.component.html',
  styleUrls: ['./plan-select.component.scss']
})
export class PlanSelectComponent implements OnInit {
  plan: Plan;
  plans: Plan[];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.planService.getPlans().subscribe(
      plans => this.plans = plans
    );
  }

}
