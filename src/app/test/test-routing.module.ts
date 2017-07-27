import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { TestHomeComponent } from './test-home/test-home.component';

const routes: Routes = [
  { path: '', component: TestComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: TestHomeComponent},
    {path: ':productId/task', loadChildren: 'app/test/test-task/test-task.module#TestTaskModule'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule { }

export const routedComponents = [TestComponent];
