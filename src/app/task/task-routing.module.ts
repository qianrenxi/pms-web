import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'list', component: TaskListComponent },
  { path: 'add', component: TaskCreateComponent },
  { path: ':taskId/edit', component: TaskEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule { }

export const routedComponents = [
    TaskListComponent,
    TaskCreateComponent,
    TaskEditComponent,
];
