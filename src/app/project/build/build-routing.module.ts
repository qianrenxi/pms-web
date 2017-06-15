import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildListComponent } from './build-list/build-list.component';

const routes: Routes = [
  { path: '', component: BuildListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildRoutingModule { }

export const routedComponents = [BuildListComponent];
