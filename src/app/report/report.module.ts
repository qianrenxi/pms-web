import { ReportRoutingModule, routedComponents } from './report-routing.module';
import { ReportPublicModule } from './public/public.module';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    ReportPublicModule,
    ReportRoutingModule
  ],
  declarations: [...routedComponents]
})
export class ReportModule { }
