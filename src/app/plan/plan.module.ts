import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiModule } from '../lib'
import { PlanRoutingModule } from './plan-routing.module';

import { PlanService } from '../service/plan.service';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { PlanViewComponent } from './plan-view/plan-view.component';
import { PlanViewInfoComponent } from './plan-view/plan-view-info/plan-view-info.component';
import { PlanViewRequirementComponent } from './plan-view/plan-view-requirement/plan-view-requirement.component';
import { PlanViewBugComponent } from './plan-view/plan-view-bug/plan-view-bug.component';
import { PlanViewReportComponent } from './plan-view/plan-view-report/plan-view-report.component';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    PlanRoutingModule,
  ],
  declarations: [
    PlanListComponent, PlanFormComponent, PlanViewComponent,
    PlanViewInfoComponent, PlanViewRequirementComponent, PlanViewBugComponent, PlanViewReportComponent,
    ],
  providers: [PlanService]
})
export class PlanModule { }
