import { ProductDetailResolver } from './../product/service/product-detail-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestLayoutComponent } from './views/test-layout/test-layout.component';
import { TestHomeComponent } from './views/test-home/test-home.component';

import { TestIssueListComponent } from './views/test-issue-list/test-issue-list.component';
import { TestIssueAddComponent } from './views/test-issue-add/test-issue-add.component';
import { TestIssueEditComponent } from './views/test-issue-edit/test-issue-edit.component';
import { TestIssueViewComponent } from './views/test-issue-view/test-issue-view.component';

import { TestCaseListComponent } from './views/test-case-list/test-case-list.component';
import { TestCaseAddComponent } from './views/test-case-add/test-case-add.component';
import { TestCaseViewComponent } from './views/test-case-view/test-case-view.component';
import { TestCaseEditComponent } from './views/test-case-edit/test-case-edit.component';

import { TestTaskListComponent } from './views/test-task-list/test-task-list.component';
import { TestTaskAddComponent } from './views/test-task-add/test-task-add.component';
import { TestTaskEditComponent } from './views/test-task-edit/test-task-edit.component';
import { TestTaskCaseListComponent } from './views/test-task-case-list/test-task-case-list.component';
import { TestTaskCaseLinkComponent } from './views/test-task-case-link/test-task-case-link.component';

import { TestSuiteListComponent } from './views/test-suite-list/test-suite-list.component';
import { TestSuiteAddComponent } from './views/test-suite-add/test-suite-add.component';
import { TestSuiteEditComponent } from './views/test-suite-edit/test-suite-edit.component';
import { TestSuiteViewComponent } from './views/test-suite-view/test-suite-view.component';
import { TestSuiteCaseListComponent } from './views/test-suite-case-list/test-suite-case-list.component';
import { TestSuiteCaseLinkComponent } from './views/test-suite-case-link/test-suite-case-link.component';


const routes: Routes = [
    {
        path: '', component: TestLayoutComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: TestHomeComponent },
            {
                path: ':productId', resolve: { product: ProductDetailResolver }, children: [
                    {
                        path: 'issue', children: [
                            { path: '', component: TestIssueListComponent },
                            { path: 'add', component: TestIssueAddComponent },
                            {
                                path: ':issueId', resolve: {}, children: [
                                    { path: 'view', component: TestIssueViewComponent },
                                    { path: 'edit', component: TestIssueEditComponent },
                                ]
                            }
                        ]
                    },
                    {
                        path: 'case', children: [
                            { path: '', component: TestCaseListComponent },
                            { path: 'add', component: TestCaseAddComponent },
                            {
                                path: ':caseId', resolve: {}, children: [
                                    { path: 'view', component: TestCaseViewComponent },
                                    { path: 'edit', component: TestCaseEditComponent },
                                ]
                            }
                        ]
                    },
                    {
                        path: 'testTask', children: [
                            { path: '', component: TestTaskListComponent },
                            { path: 'add', component: TestTaskAddComponent },
                            {
                                path: ':taskId', resolve: {}, children: [
                                    { path: 'edit', component: TestTaskEditComponent },
                                    { path: 'case', component: TestTaskCaseListComponent },
                                    { path: 'case/link', component: TestTaskCaseLinkComponent },
                                ]
                            }
                        ]
                    },
                    {
                        path: 'suite', children: [
                            { path: '', component: TestSuiteListComponent },
                            { path: 'add', component: TestSuiteAddComponent },
                            {
                                path: ':suiteId', resolve: {}, children: [
                                    { path: 'view', component: TestSuiteViewComponent },
                                    { path: 'edit', component: TestSuiteEditComponent },
                                    // { path: 'case', component: TestSuiteCaseListComponent },
                                    { path: 'case/link', component: TestSuiteCaseLinkComponent },
                                ]
                            }
                        ]
                    },
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ProductDetailResolver]
})
export class TestRoutingModule { }

export const routedComponents = [
    TestLayoutComponent,
    TestHomeComponent,

    TestIssueListComponent,
    TestIssueAddComponent,
    TestIssueEditComponent,
    TestIssueViewComponent,

    TestCaseListComponent,
    TestCaseAddComponent,
    TestCaseViewComponent,
    TestCaseEditComponent,

    TestTaskListComponent,
    TestTaskAddComponent,
    TestTaskEditComponent,
    TestTaskCaseListComponent,
    TestTaskCaseLinkComponent,

    TestSuiteListComponent,
    TestSuiteAddComponent,
    TestSuiteEditComponent,
    TestSuiteViewComponent,
    TestSuiteCaseListComponent,
    TestSuiteCaseLinkComponent,
];
