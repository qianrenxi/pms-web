import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { CuiModule } from '../lib/cui.module';
import { ProjectRoutingModule } from './project-routing';
import { ProjectService } from '../service/project.service';
import { ProjectFormComponent } from './project-form/project-form.component';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    ProjectRoutingModule,
  ],
  declarations: [ProjectComponent, ProjectFormComponent],
  providers: [ProjectService]
})
export class ProjectModule { }
