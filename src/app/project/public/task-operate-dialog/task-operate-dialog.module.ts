import { TaskOperateDialogService } from './task-operate-dialog.service';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAssignDialogComponent } from './task-assign-dialog/task-assign-dialog.component';
import { TaskStartDialogComponent } from './task-start-dialog/task-start-dialog.component';
import { TaskPauseDialogComponent } from './task-pause-dialog/task-pause-dialog.component';
import { TaskRestartDialogComponent } from './task-restart-dialog/task-restart-dialog.component';
import { TaskTimeEntriesDialogComponent } from './task-time-entries-dialog/task-time-entries-dialog.component';
import { TaskCompleteDialogComponent } from './task-complete-dialog/task-complete-dialog.component';
import { TaskCancelDialogComponent } from './task-cancel-dialog/task-cancel-dialog.component';
import { TaskCloseDialogComponent } from './task-close-dialog/task-close-dialog.component';
import { TaskActiveDialogComponent } from './task-active-dialog/task-active-dialog.component';

const OPERATE_DIALOGS = [
  TaskAssignDialogComponent,
  TaskStartDialogComponent,
  TaskPauseDialogComponent,
  TaskRestartDialogComponent,
  TaskTimeEntriesDialogComponent,
  TaskCompleteDialogComponent,
  TaskCancelDialogComponent,
  TaskCloseDialogComponent,
  TaskActiveDialogComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...OPERATE_DIALOGS],
  exports: [...OPERATE_DIALOGS],
  entryComponents: [...OPERATE_DIALOGS],
  providers: [TaskOperateDialogService]
})
export class TaskOperateDialogModule { }
