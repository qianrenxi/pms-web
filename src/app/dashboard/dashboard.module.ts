import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'app/common/shared';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [...routedComponents]
})
export class DashboardModule { }
