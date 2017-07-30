import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './views/user-list/user-list.component';
import { UserAddComponent } from './views/user-add/user-add.component';
import { UserEditComponent } from './views/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: UserAddComponent },
  { path: ':id/edit', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

export const routedComponents = [UserListComponent];
