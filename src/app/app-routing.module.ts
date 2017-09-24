import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from 'app/common/shared';
import { AuthGuard } from 'app/common/core';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [];
