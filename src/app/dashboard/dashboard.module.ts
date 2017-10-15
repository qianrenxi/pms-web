import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'app/common/shared';
import { DashboardPublicModule } from './public/dashboard-public.module';
import { ProjectPublicModule } from './../project/public/project-public.module';
import { TestPublicModule } from './../test/public/public.module';


@NgModule({
  imports: [
    SharedModule,
    DashboardPublicModule,
    DashboardRoutingModule,

    ProjectPublicModule,
    TestPublicModule
  ],
  declarations: [...routedComponents]
})
export class DashboardModule { }
