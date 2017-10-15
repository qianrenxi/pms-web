import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from './views/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './views/dashboard-home/dashboard-home.component';

import { MyTodoCalendarComponent } from './views/my-todo-calendar/my-todo-calendar.component';
import { MyEffortCalendarComponent } from './views/my-effort-calendar/my-effort-calendar.component';
import { MyTaskListComponent } from './views/my-task-list/my-task-list.component';
import { MyIssueListComponent } from './views/my-issue-list/my-issue-list.component';
import { MyTestCaseListComponent } from './views/my-test-case-list/my-test-case-list.component';
import { MyTestTaskListComponent } from './views/my-test-task-list/my-test-task-list.component';
import { MyRequirementListComponent } from './views/my-requirement-list/my-requirement-list.component';
import { MyProjectListComponent } from './views/my-project-list/my-project-list.component';
import { MyActivityListComponent } from './views/my-activity-list/my-activity-list.component';
import { MyProfileComponent } from './views/my-profile/my-profile.component';

const routes: Routes = [
    {
        path: '', component: DashboardLayoutComponent, children: [
            { path: '', component: DashboardHomeComponent },
            {
                path: 'my', children: [
                    { path: 'todo', component: MyTodoCalendarComponent },
                    { path: 'effort', component: MyEffortCalendarComponent },
                    { path: 'task', component: MyTaskListComponent },
                    { path: 'issue', component: MyIssueListComponent },
                    { path: 'testCase', component: MyTestCaseListComponent },
                    { path: 'testTask', component: MyTestTaskListComponent },
                    { path: 'requirement', component: MyRequirementListComponent },
                    { path: 'project', component: MyProjectListComponent },
                    { path: 'activity', component: MyActivityListComponent },
                    { path: 'profile', component: MyProfileComponent },
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [
    DashboardLayoutComponent,
    DashboardHomeComponent,

    MyTodoCalendarComponent,
    MyEffortCalendarComponent,
    MyTaskListComponent,
    MyIssueListComponent,
    MyTestCaseListComponent,
    MyTestTaskListComponent,
    MyRequirementListComponent,
    MyProjectListComponent,
    MyActivityListComponent,
    MyProfileComponent,
];
