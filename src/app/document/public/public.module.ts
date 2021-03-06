import { ProjectPublicModule } from './../../project/public/project-public.module';
import { ProductPublicModule } from './../../product/public/public.module';
import { DocOperateDialogModule } from './doc-operate-dialog/doc-operate-dialog.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentToolbarComponent } from './document-toolbar/document-toolbar.component';

const PUBLIC_COMPONENTS = [
  DocumentToolbarComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule,

    ProductPublicModule,
    ProjectPublicModule,

    DocOperateDialogModule
  ],
  declarations: [...PUBLIC_COMPONENTS, ],
  exports: [...PUBLIC_COMPONENTS, DocOperateDialogModule]
})
export class DocumentPublicModule { }
