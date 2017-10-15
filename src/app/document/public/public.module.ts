import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentToolbarComponent } from './document-toolbar/document-toolbar.component';

const PUBLIC_COMPONENTS = [
  DocumentToolbarComponent
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS]
})
export class DocumentPublicModule { }
