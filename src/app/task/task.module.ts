import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskRoutingModule } from './task-routing.module';
import { CuiModule } from 'consoleui';
import { TaskService } from '../service/task.service';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    TaskRoutingModule
  ],
  declarations: [TaskListComponent, TaskViewComponent, TaskCreateComponent, TaskEditComponent],
  providers: [TaskService]
})
export class TaskModule { }
