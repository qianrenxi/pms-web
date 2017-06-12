import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiModule } from '../lib'
import { RequirementRoutingModule } from './requirement-routing.module';

import { RequirementService } from '../service/requirement.service';

import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirementViewComponent } from './requirement-view/requirement-view.component';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { RequirementEditComponent } from './requirement-edit/requirement-edit.component';


@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    RequirementRoutingModule
  ],
  declarations: [
    RequirementFormComponent,
    RequirementViewComponent,
    RequirementListComponent,
    RequirementEditComponent
  ],
  exports: [
    RequirementFormComponent,
    RequirementViewComponent,
    RequirementListComponent
  ],
  providers: [
    RequirementService
  ]
})
export class RequirementModule { }
