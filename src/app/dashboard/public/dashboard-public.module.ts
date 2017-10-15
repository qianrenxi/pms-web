import { WidgetModule } from './widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/common';
import { RouterModule } from '@angular/router';

import { DashboardToolbarComponent } from './dashboard-toolbar/dashboard-toolbar.component';
import { UserFormComponent } from './user-form/user-form.component';

const PUBLIC_COMPONENTS = [
  DashboardToolbarComponent,
  UserFormComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    WidgetModule,
  ],
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS, WidgetModule]
})
export class DashboardPublicModule { }
