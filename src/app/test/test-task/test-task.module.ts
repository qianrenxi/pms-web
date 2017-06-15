import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTaskListComponent } from './test-task-list/test-task-list.component';
import { CuiModule } from '../../lib/cui.module';
import { TestTaskRoutingModule } from './test-task-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    TestTaskRoutingModule,
  ],
  declarations: [TestTaskListComponent]
})
export class TestTaskModule { }
