import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetProductListComponent } from './widget-product-list/widget-product-list.component';
import { WidgetProjectListComponent } from './widget-project-list/widget-project-list.component';
import { WidgetActivityListComponent } from './widget-activity-list/widget-activity-list.component';
import { WidgetTaskListComponent } from './widget-task-list/widget-task-list.component';
import { WidgetIssueListComponent } from './widget-issue-list/widget-issue-list.component';

const WIDGET_COMPONENTS = [
  WidgetProductListComponent,
  WidgetProjectListComponent,
  WidgetActivityListComponent,
  WidgetTaskListComponent,
  WidgetIssueListComponent,
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...WIDGET_COMPONENTS],
  exports: [...WIDGET_COMPONENTS]
})
export class WidgetModule { }
