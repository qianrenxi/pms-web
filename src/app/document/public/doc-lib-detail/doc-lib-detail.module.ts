import { DocLibDetailRoutingModule, routedComponents } from './doc-lib-detail-routing.module';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentFormComponent } from './document-form/document-form.component';

@NgModule({
  imports: [
    SharedModule,
    DocLibDetailRoutingModule
  ],
  declarations: [...routedComponents, DocumentFormComponent]
})
export class DocLibDetailModule { }
