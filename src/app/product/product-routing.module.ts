import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './views/product/product.component';
import { ProductHomeComponent } from './views/product-home/product-home.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductAddComponent } from './views/product-add/product-add.component';
import { ProductEditComponent } from './views/product-edit/product-edit.component';
import { ProductRequirementListComponent } from './views/product-requirement-list/product-requirement-list.component';
import { ProductModuleComponent } from './views/product-module/product-module.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProjectListComponent } from './views/project-list/project-list.component';
import { ReleaseListComponent } from './views/release';
import { ActivityViewComponent } from '../activity';
import { LibListComponent as DocumentLibListComponent } from '../document';


const routes: Routes = [
    {
      path: '', component: ProductComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'home', component: ProductHomeComponent},
            { path: 'list', component: ProductListComponent},
            { path: 'add', component: ProductAddComponent},

            { path: ':productId/view', component: ProductViewComponent },
            { path: ':productId/edit', component: ProductEditComponent },
            { path: ':productId/modules', component: ProductModuleComponent},
            { path: ':productId/plans',
                loadChildren: 'app/plan/plan.module#PlanModule'},
            { path: ':productId/requirements', component: ProductRequirementListComponent},
            { path: ':productId/requirements',
                loadChildren: 'app/requirement/requirement.module#RequirementModule'},
            { path: ':productId/activities', component: ActivityViewComponent },
            { path: ':productId/release', component: ReleaseListComponent },
            { path: ':productId/projects', component: ProjectListComponent },
            { path: ':productId/docLibs', component: DocumentLibListComponent},
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
    ProductAddComponent,
    ProductEditComponent,
    ProductRequirementListComponent,
    ProductModuleComponent,
    ProductViewComponent,
    ProjectListComponent,
    ReleaseListComponent,
];
