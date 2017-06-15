import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectComponent } from './plan-select/plan-select.component';
import { CuiModule } from '../../lib/cui.module';
import { PlanService } from '../../service/plan.service';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
  ],
  declarations: [PlanSelectComponent],
  providers: [PlanService],
  exports: [PlanSelectComponent],
})
export class PlanPublicModule { }
