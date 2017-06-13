import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  declarations: [TaskListComponent, TaskViewComponent, TaskCreateComponent, TaskEditComponent]
})
export class TaskModule { }
