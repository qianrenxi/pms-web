import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirementViewComponent } from './requirement-view/requirement-view.component';

const routes: Routes = [
  { path: 'add', component: RequirementFormComponent },
  { path: ':requirementId/edit', component: RequirementFormComponent },
  { path: ':requirementId/view', component: RequirementViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequirementRoutingModule { }

export const routedComponents = [RequirementFormComponent, RequirementViewComponent];
