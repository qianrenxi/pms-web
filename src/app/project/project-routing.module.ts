import { ProjectFormComponent } from './project-form/project-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectRequirementListComponent } from './project-requirement-list/project-requirement-list.component';
import { ActivityViewComponent } from '../activity/activity-view/activity-view.component';
import { LibListComponent as DocumentLibListComponent } from '../document';
import { MemberListComponent } from '../team/member-list/member-list.component';

const routes: Routes = [
  { path: '', component: ProjectComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: ProjectHomeComponent },
      { path: 'list', component: ProjectListComponent },
      { path: 'add', component: ProjectFormComponent },
      { path: ':projectId/view', component: ProjectViewComponent },
      { path: ':projectId/edit', component: ProjectFormComponent },
      { path: ':projectId/tasks', loadChildren: 'app/task/task.module#TaskModule' },
      { path: ':projectId/issues', loadChildren: 'app/issue/issue.module#IssueModule' },
      { path: ':projectId/requirements', component: ProjectRequirementListComponent },
      { path: ':projectId/requirements', loadChildren: 'app/requirement/requirement.module#RequirementModule' },
      { path: ':projectId/activities', component: ActivityViewComponent },
      { path: ':projectId/docLibs', component: DocumentLibListComponent },
      { path: ':projectId/team', component: MemberListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule { }

export const routedComponents = [
  ProjectComponent,
  ProjectHomeComponent,
  ProjectListComponent,
  ProjectFormComponent,
  ProjectViewComponent,
];
