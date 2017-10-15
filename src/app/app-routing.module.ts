import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from 'app/common/shared';
import { AuthGuard } from 'app/common/core';

const routes: Routes = [
  { path: '', redirectTo: 'console', pathMatch: 'full' },
  {
    path: 'console', component: MainLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
      { path: 'product', loadChildren: 'app/product/product.module#ProductModule' },
      { path: 'project', loadChildren: 'app/project/project.module#ProjectModule' },
      { path: 'test', loadChildren: 'app/test/test.module#TestModule' },
      { path: 'document', loadChildren: 'app/document/document.module#DocumentModule' },
      { path: 'report', loadChildren: 'app/report/report.module#ReportModule' },
      { path: 'group', loadChildren: 'app/group/group.module#GroupModule' },
      { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [];
