import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiModule } from 'consoleui';
import { UEditorModule } from 'ngx-ueditor';
import { RequirementRoutingModule } from './requirement-routing.module';

import { RequirementService } from '../service/requirement.service';

import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirementViewComponent } from './requirement-view/requirement-view.component';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { RequirementEditComponent } from './requirement-edit/requirement-edit.component';
import { ProductPublicModule } from '../product/public/public.module';
import { PlanPublicModule } from '../plan/public/public.module';


@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    FormsModule,
    UEditorModule.forRoot({
            // 指定ueditor.js路径目录
            path: 'assets/ueditor/',
            // 默认全局配置项
            options: {
                themePath: '/assets/ueditor/themes/'
            }
        }),
    RequirementRoutingModule,
    ProductPublicModule,
    PlanPublicModule,
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
