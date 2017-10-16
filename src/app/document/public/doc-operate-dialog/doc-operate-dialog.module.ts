import { SharedModule } from 'app/common/shared';
import { DocOperateDialogService } from './doc-operate-dialog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoclibAddDialogComponent } from './doclib-add-dialog/doclib-add-dialog.component';

const OPERATE_DIALOGS = [
  DoclibAddDialogComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...OPERATE_DIALOGS],
  exports: [...OPERATE_DIALOGS],
  entryComponents: [...OPERATE_DIALOGS],
  providers: [DocOperateDialogService]
})
export class DocOperateDialogModule { }
