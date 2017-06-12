import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanViewComponent } from './plan-view/plan-view.component';

const routes: Routes = [
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '', component: PlanListComponent },
  { path: 'list', component: PlanListComponent },
  { path: ':planId/view', component: PlanViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanRoutingModule { }

export const routedComponents = [PlanListComponent, PlanViewComponent];
