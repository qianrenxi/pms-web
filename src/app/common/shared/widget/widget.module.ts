import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributeSelectComponent } from './attribute-select/attribute-select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectComponent } from './user-select/user-select.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { ProductListPannelComponent } from './product-list-pannel/product-list-pannel.component';
import { ProjectListPannelComponent } from './project-list-pannel/project-list-pannel.component';
import { RequirementListPannelComponent } from './requirement-list-pannel/requirement-list-pannel.component';
import { TaskListPannelComponent } from './task-list-pannel/task-list-pannel.component';
import { IssueListPannelComponent } from './issue-list-pannel/issue-list-pannel.component';
import { TestTaskListPannelComponent } from './test-task-list-pannel/test-task-list-pannel.component';

const WIDGETS = [
  AttributeSelectComponent,
  UserSelectComponent,
  ChangeLogComponent,

  ProductListPannelComponent,
  ProjectListPannelComponent,
  RequirementListPannelComponent,
  TaskListPannelComponent,
  IssueListPannelComponent,
  TestTaskListPannelComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [...WIDGETS],
  exports: [...WIDGETS]
})
export class WidgetModule { }
