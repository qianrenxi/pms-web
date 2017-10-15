import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/common';
import { ProjectPublicModule } from './../../../project/public/project-public.module';
import { IssueOperateDialogService } from './issue-operate-dialog.service';
import { IssueTimeDialogComponent } from './issue-time-dialog/issue-time-dialog.component';
import { IssueVerifyDialogComponent } from './issue-verify-dialog/issue-verify-dialog.component';
import { IssueAssignDialogComponent } from './issue-assign-dialog/issue-assign-dialog.component';
import { IssueResolveDialogComponent } from './issue-resolve-dialog/issue-resolve-dialog.component';
import { IssueCloseDialogComponent } from './issue-close-dialog/issue-close-dialog.component';

const OPERATE_DIALOGS = [
  IssueTimeDialogComponent,
  IssueVerifyDialogComponent,
  IssueAssignDialogComponent,
  IssueResolveDialogComponent,
  IssueCloseDialogComponent,
];

@NgModule({
  imports: [
  SharedModule,
    ProjectPublicModule
  ],
  declarations: [...OPERATE_DIALOGS],
  exports: [...OPERATE_DIALOGS],
  entryComponents: [...OPERATE_DIALOGS],
  providers: [IssueOperateDialogService]
})
export class IssueOperateDialogModule { }
