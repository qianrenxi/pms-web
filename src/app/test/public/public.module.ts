import { ProductPublicModule } from './../../product/public/public.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestToolbarComponent } from './test-toolbar/test-toolbar.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { TestTaskFormComponent } from './test-task-form/test-task-form.component';
import { TestCaseFormComponent } from './test-case-form/test-case-form.component';
import { TestSuiteFormComponent } from './test-suite-form/test-suite-form.component';
import { TestStepControlComponent } from './test-step-control/test-step-control.component';

const PUBLIC_COMPONENTS = [
  TestToolbarComponent,

  IssueFormComponent,
  TestTaskFormComponent,
  TestCaseFormComponent,
  TestSuiteFormComponent,
  TestStepControlComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    ProductPublicModule,
  ],
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS]
})
export class TestPublicModule { }
