import { TaskOperateDialogModule } from './task-operate-dialog/task-operate-dialog.module';
import { ProjectOperateDialogModule } from './project-operate-dialog/project-operate-dialog.module';
import { ProductPublicModule } from './../../product/public/public.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectToolbarComponent } from './project-toolbar/project-toolbar.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectChangeLogComponent } from './project-change-log/project-change-log.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { BuildFormComponent } from './build-form/build-form.component';
import { ProjectSelectComponent } from './project-select/project-select.component';
import { BuildSelectComponent } from './build-select/build-select.component';
import { TaskSelectComponent } from './task-select/task-select.component';

const PROJECT_PUBLIC_COMPONENTS = [
  ProjectToolbarComponent,
  ProjectFormComponent,
  ProjectChangeLogComponent,

  TaskFormComponent,
  BuildFormComponent,

  ProjectSelectComponent,
  BuildSelectComponent,
  TaskSelectComponent,
];

@NgModule({
  imports: [
    SharedModule,
    ProductPublicModule,
    RouterModule,

    ProjectOperateDialogModule,
    TaskOperateDialogModule,
  ],
  declarations: [...PROJECT_PUBLIC_COMPONENTS],
  exports: [...PROJECT_PUBLIC_COMPONENTS, ProjectOperateDialogModule, TaskOperateDialogModule],
  entryComponents: []
})
export class ProjectPublicModule { }
