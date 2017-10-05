import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/common/shared';
import { ProductToolbarComponent } from './product-toolbar/product-toolbar.component';
import { RouterModule } from '@angular/router';
import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirementBatchFormComponent } from './requirement-batch-form/requirement-batch-form.component';
import { RequirementSubdivideDialogComponent } from './requirement-subdivide-dialog/requirement-subdivide-dialog.component';
import { RequirementCloseDialogComponent } from './requirement-close-dialog/requirement-close-dialog.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { ModuleSelectComponent } from './module-select/module-select.component';
import { PlanSelectComponent } from './plan-select/plan-select.component';
import { ProductSelectComponent } from './product-select/product-select.component';
import { RequirementChangeLogComponent } from './requirement-change-log/requirement-change-log.component';

const PUBLIC_COMPONENTS = [
  ProductToolbarComponent,
  RequirementFormComponent,
  RequirementBatchFormComponent,
  RequirementSubdivideDialogComponent,
  RequirementCloseDialogComponent,
  PlanFormComponent,
  ModuleSelectComponent,
  PlanSelectComponent,
  ProductSelectComponent,
  RequirementChangeLogComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [...PUBLIC_COMPONENTS, ],
  exports: [...PUBLIC_COMPONENTS],
  entryComponents: [
    RequirementSubdivideDialogComponent,
    RequirementCloseDialogComponent,
  ]
})
export class ProductPublicModule { }
