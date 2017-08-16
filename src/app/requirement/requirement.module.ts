import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiModule } from 'consoleui';
import { UEditorModule } from 'ngx-ueditor';
import { RequirementRoutingModule } from './requirement-routing.module';

import { RequirementService } from '../service/requirement.service';

import { RequirementFormComponent } from './views/requirement-form/requirement-form.component';
import { RequirementViewComponent } from './views/requirement-view/requirement-view.component';
import { RequirementListComponent } from './views/requirement-list/requirement-list.component';
import { RequirementEditComponent } from './views/requirement-edit/requirement-edit.component';
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
