import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTaskListComponent } from './test-task-list/test-task-list.component';

const routes: Routes = [
  { path: '', component: TestTaskListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTaskRoutingModule { }

export const routedComponents = [TestTaskListComponent];
