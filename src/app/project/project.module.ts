import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { CuiModule } from '../lib/cui.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectService } from '../service/project.service';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectHomeComponent } from './project-home/project-home.component';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    ProjectRoutingModule,
  ],
  declarations: [ProjectComponent, ProjectFormComponent, ProjectListComponent, ProjectViewComponent, ProjectHomeComponent],
  providers: [ProjectService]
})
export class ProjectModule { }
