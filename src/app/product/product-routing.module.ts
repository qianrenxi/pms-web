import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductRequirementListComponent } from './product-requirement-list/product-requirement-list.component';
import { ProductModuleComponent } from './product-module/product-module.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ActivityViewComponent } from '../activity';
import { ReleaseListComponent } from './release';
import { LibListComponent as DocumentLibListComponent } from '../document';
import { ProjectListComponent } from './project-list/project-list.component';


const routes: Routes = [
    {
      path: '', component: ProductComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'home', component: ProductHomeComponent},
            { path: 'list', component: ProductListComponent},
            { path: 'add', component: ProductFormComponent},

            { path: ':productId/view', component: ProductViewComponent },
            { path: ':productId/edit', component: ProductFormComponent },
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
    ProductModuleComponent,
    ProductViewComponent,
];
