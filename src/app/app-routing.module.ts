import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedLayoutComponent } from './layouts/fixed-layout/fixed-layout.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: FixedLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
      { path: 'product', loadChildren: 'app/product/product.module#ProductModule' },
      { path: 'project', loadChildren: 'app/project/project.module#ProjectModule' },
      { path: 'test', loadChildren: 'app/test/test.module#TestModule' },

      { path: 'org', loadChildren: 'app/org/org.module#OrgModule' },
      { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
    ]
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
