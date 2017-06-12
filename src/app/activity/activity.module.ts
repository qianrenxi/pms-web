import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityViewComponent } from './activity-view/activity-view.component';
import { ActivityService } from '../service/activity.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActivityViewComponent],
  exports: [ActivityViewComponent],
  providers: [ActivityService]
})
export class ActivityModule { }
