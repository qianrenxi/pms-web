import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'product',
    loadChildren: 'app/product/product.module#ProductModule'
  },
  {
    path: 'project',
    loadChildren: 'app/project/project.module#ProjectModule'
  },
  { path: 'test', loadChildren: 'app/test/test.module#TestModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
