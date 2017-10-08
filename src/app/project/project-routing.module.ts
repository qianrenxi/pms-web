import { ProjectBuildRequiementListComponent } from './views/project-build-requiement-list/project-build-requiement-list.component';
import { ProjectBuildRequiementLinkComponent } from './views/project-build-requiement-link/project-build-requiement-link.component';
import { ProjectBuildIssueLinkComponent } from './views/project-build-issue-link/project-build-issue-link.component';
import { ProjectBuildIssueLinkedComponent } from './views/project-build-issue-linked/project-build-issue-linked.component';
import { ProjectBuildIssueBlowComponent } from './views/project-build-issue-blow/project-build-issue-blow.component';
import { BuildDetailResolver } from './service/build-detail-resolver.service';
import { ProjectBuildEditComponent } from './views/project-build-edit/project-build-edit.component';
import { ProjectBuildViewComponent } from './views/project-build-view/project-build-view.component';
import { ProjectBuildAddComponent } from './views/project-build-add/project-build-add.component';
import { ProjectBuildListComponent } from './views/project-build-list/project-build-list.component';
import { ProjectRequirementLinkComponent } from './views/project-requirement-link/project-requirement-link.component';
import { ProjectRequirementListComponent } from './views/project-requirement-list/project-requirement-list.component';
import { ProjectTaskCopyComponent } from './views/project-task-copy/project-task-copy.component';
import { TaskDetailResolver } from './service/task-detail-resolver.service';
import { ProjectTaskEditComponent } from './views/project-task-edit/project-task-edit.component';
import { ProjectTaskViewComponent } from './views/project-task-view/project-task-view.component';
import { ProjectTaskAddComponent } from './views/project-task-add/project-task-add.component';
import { ProjectTaskListComponent } from './views/project-task-list/project-task-list.component';
import { ProjectDetailResolver } from './service/project-detail-resolver.service';
import { ProjectOverviewComponent } from './views/project-overview/project-overview.component';
import { ProjectEditComponent } from './views/project-edit/project-edit.component';
import { ProjectAddComponent } from './views/project-add/project-add.component';
import { ProjectListComponent } from './views/project-list/project-list.component';
import { ProjectHomeComponent } from './views/project-home/project-home.component';
import { ProjectLayoutComponent } from './views/project-layout/project-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: ProjectLayoutComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: ProjectHomeComponent },
            { path: 'list', component: ProjectListComponent },
            { path: 'add', component: ProjectAddComponent },
            {
                path: ':projectId', resolve: { project: ProjectDetailResolver }, children: [
                    { path: 'overview', component: ProjectOverviewComponent },
                    { path: 'edit', component: ProjectEditComponent },
                    {
                        path: 'task', children: [
                            { path: '', component: ProjectTaskListComponent },
                            { path: 'add', component: ProjectTaskAddComponent },
                            {
                                path: ':taskId', resolve: { task: TaskDetailResolver }, children: [
                                    { path: 'view', component: ProjectTaskViewComponent },
                                    { path: 'edit', component: ProjectTaskEditComponent },
                                    { path: 'copy', component: ProjectTaskCopyComponent },
                                ]
                            }
                        ]
                    },
                    {
                        path: 'requirement', children: [
                            { path: '', component: ProjectRequirementListComponent },
                            { path: 'link', component: ProjectRequirementLinkComponent }
                        ]
                    },
                    {
                        path: 'build', children: [
                            { path: '', component: ProjectBuildListComponent },
                            { path: 'add', component: ProjectBuildAddComponent },
                            {
                                path: ':buildId', resolve: { build: BuildDetailResolver }, children: [
                                    {
                                        path: 'view', component: ProjectBuildViewComponent, children: [
                                            // { path: '', redirectTo: 'requirement', pathMatch: 'full', outlet: 'requirement' },
                                            { path: 'requirement', component: ProjectBuildRequiementListComponent, outlet: 'requirement' },
                                            { path: 'issue', component: ProjectBuildIssueLinkedComponent, outlet: 'issue' },
                                            { path: 'issueBlow', component: ProjectBuildIssueBlowComponent, outlet: 'issueBlow' },
                                        ]
                                    },
                                    { path: 'edit', component: ProjectBuildEditComponent },
                                    { path: 'requirement/link', component: ProjectBuildRequiementLinkComponent },
                                    { path: 'issue/link', component: ProjectBuildIssueLinkComponent },
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ProjectDetailResolver,
        TaskDetailResolver,
        BuildDetailResolver,
    ]
})
export class ProjectRoutingModule { }

export const routedComponents = [
    ProjectLayoutComponent,
    ProjectHomeComponent,
    ProjectListComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    ProjectOverviewComponent,

    ProjectTaskListComponent,
    ProjectTaskAddComponent,
    ProjectTaskEditComponent,
    ProjectTaskViewComponent,
    ProjectTaskCopyComponent,

    ProjectRequirementListComponent,
    ProjectRequirementLinkComponent,

    ProjectBuildListComponent,
    ProjectBuildAddComponent,
    ProjectBuildEditComponent,
    ProjectBuildViewComponent,
    ProjectBuildRequiementListComponent,
    ProjectBuildRequiementLinkComponent,
    ProjectBuildIssueLinkComponent,
    ProjectBuildIssueLinkedComponent,
    ProjectBuildIssueBlowComponent
];
