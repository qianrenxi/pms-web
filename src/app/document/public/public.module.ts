import { DocOperateDialogModule } from './doc-operate-dialog/doc-operate-dialog.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentToolbarComponent } from './document-toolbar/document-toolbar.component';
import { DocumentFormComponent } from './document-form/document-form.component';

const PUBLIC_COMPONENTS = [
  DocumentToolbarComponent,
  DocumentFormComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule,

    DocOperateDialogModule
  ],
  declarations: [...PUBLIC_COMPONENTS, ],
  exports: [...PUBLIC_COMPONENTS, DocOperateDialogModule]
})
export class DocumentPublicModule { }
