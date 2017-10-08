import { SharedModule } from 'app/common/shared';
import { ProjectOperateDialogService } from './project-operate-dialog.service';
import { ProjectCloseDialogComponent } from './project-close-dialog/project-close-dialog.component';
import { ProjectPauseDialogComponent } from './project-pause-dialog/project-pause-dialog.component';
import { ProjectDelayDialogComponent } from './project-delay-dialog/project-delay-dialog.component';
import { ProjectStartDialogComponent } from './project-start-dialog/project-start-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const OPERATE_DIALOGS = [
  ProjectStartDialogComponent,
  ProjectDelayDialogComponent,
  ProjectPauseDialogComponent,
  ProjectCloseDialogComponent,
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...OPERATE_DIALOGS],
  exports: [...OPERATE_DIALOGS],
  entryComponents: [...OPERATE_DIALOGS],
  providers: [ProjectOperateDialogService]
})
export class ProjectOperateDialogModule { }
