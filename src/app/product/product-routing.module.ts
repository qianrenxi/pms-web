import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLayoutComponent } from './views/product-layout/product-layout.component';
import { ProductHomeComponent } from './views/product-home/product-home.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductAddComponent } from './views/product-add/product-add.component';

const routes: Routes = [
    {
        path: '', component: ProductLayoutComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: ProductHomeComponent },
            { path: 'list', component: ProductListComponent },
            { path: 'add', component: ProductAddComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }

export const routedComponents = [
    ProductLayoutComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductAddComponent,
];
