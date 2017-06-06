import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
    {
      path: '', component: ProductComponent,
        children: [
            { path: 'home', component: ProductHomeComponent},
            { path: 'list', component: ProductListComponent},
            { path: 'add', component: ProductFormComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }

export const routedComponents = [
    ProductComponent,
    ProductHomeComponent,
    ProductListComponent,
];
