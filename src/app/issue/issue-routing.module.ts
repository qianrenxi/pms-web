import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { IssueViewComponent } from './issue-view/issue-view.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

const routes: Routes = [
  { path: '', component: IssueListComponent },
  { path: 'list', component: IssueListComponent },
  { path: 'create', component: IssueCreateComponent },
  { path: ':issueId/view', component: IssueViewComponent },
  { path: ':issueId/edit', component: IssueEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssueRoutingModule { }

export const routedComponents = [
    IssueListComponent,
    IssueCreateComponent,
    IssueViewComponent,
    IssueEditComponent,
];
