import { PlanDetailResolver } from './service/plan-detail-resolver.service';
import { ProductPlanViewComponent } from './views/product-plan-view/product-plan-view.component';
import { ProductPlanEditComponent } from './views/product-plan-edit/product-plan-edit.component';
import { ProductPlanAddComponent } from './views/product-plan-add/product-plan-add.component';
import { ProductReleaseListComponent } from './views/product-release-list/product-release-list.component';
import { ProductActivityComponent } from './views/product-activity/product-activity.component';
import { ProductPlanListComponent } from './views/product-plan-list/product-plan-list.component';
import { ProductRequirementCopyComponent } from './views/product-requirement-copy/product-requirement-copy.component';
import { ProductRequirementBatchAddComponent } from './views/product-requirement-batch-add/product-requirement-batch-add.component';
import { ProductRequirementReviewComponent } from './views/product-requirement-review/product-requirement-review.component';
import { ProductRequirementChangeComponent } from './views/product-requirement-change/product-requirement-change.component';
import { Requirement } from './../common/entity/requirement';
import { RequirementDetailResolver } from './service/requirement-detail-resolver.service';
import { ProductRequirementEditComponent } from './views/product-requirement-edit/product-requirement-edit.component';
import { ProductRequirementViewComponent } from './views/product-requirement-view/product-requirement-view.component';
import { ProductRequirementAddComponent } from './views/product-requirement-add/product-requirement-add.component';
import { ProductRequirementListComponent } from './views/product-requirement-list/product-requirement-list.component';
import { ProductModuleComponent } from './views/product-module/product-module.component';
import { ProductDetailResolver } from './service/product-detail-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLayoutComponent } from './views/product-layout/product-layout.component';
import { ProductHomeComponent } from './views/product-home/product-home.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductAddComponent } from './views/product-add/product-add.component';
import { ProductOverviewComponent } from './views/product-overview/product-overview.component';

const routes: Routes = [
    {
        path: '', component: ProductLayoutComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: ProductHomeComponent },
            { path: 'list', component: ProductListComponent },
            { path: 'add', component: ProductAddComponent },
            {
                path: ':productId', resolve: { product: ProductDetailResolver },
                children: [
                    { path: 'module', component: ProductModuleComponent },
                    { path: 'overview', component: ProductOverviewComponent },
                    { path: 'activity', component: ProductActivityComponent },
                    {
                        path: 'requirement', children: [
                            { path: '', component: ProductRequirementListComponent },
                            { path: 'add', component: ProductRequirementAddComponent },
                            { path: 'batchAdd', component: ProductRequirementBatchAddComponent },
                            {
                                path: ':requirementId', resolve: { requirement: RequirementDetailResolver }, children: [
                                    { path: 'edit', component: ProductRequirementEditComponent },
                                    { path: 'view', component: ProductRequirementViewComponent },
                                    { path: 'change', component: ProductRequirementChangeComponent },
                                    { path: 'review', component: ProductRequirementReviewComponent },
                                    { path: 'copy', component: ProductRequirementCopyComponent },
                                ]
                            }]
                    },
                    {
                        path: 'plan', children: [
                            { path: '', component: ProductPlanListComponent },
                            { path: 'add', component: ProductPlanAddComponent },
                            {
                                path: ':planId', resolve: { plan: PlanDetailResolver }, children: [
                                    { path: 'edit', component: ProductPlanEditComponent },
                                    { path: 'view', component: ProductPlanViewComponent },
                                ]
                            }
                        ]
                    },
                    {
                        path: 'release', children: [
                            { path: '', component: ProductReleaseListComponent, },
                        ]
                    },
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ProductDetailResolver,
        RequirementDetailResolver,
        PlanDetailResolver
    ]
})
export class ProductRoutingModule { }

export const routedComponents = [
    ProductLayoutComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductOverviewComponent,
    ProductModuleComponent,

    ProductRequirementListComponent,
    ProductRequirementAddComponent,
    ProductRequirementBatchAddComponent,
    ProductRequirementViewComponent,
    ProductRequirementEditComponent,
    ProductRequirementChangeComponent,
    ProductRequirementReviewComponent,
    ProductRequirementCopyComponent,

    ProductPlanListComponent,
    ProductPlanAddComponent,
    ProductPlanEditComponent,
    ProductPlanViewComponent,

    ProductReleaseListComponent,

    ProductActivityComponent,
];
