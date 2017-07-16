import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { CuiModule } from 'consoleui';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectService } from '../service/project.service';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectRequirementListComponent } from './project-requirement-list/project-requirement-list.component';
import { RequirementModule } from '../requirement/requirement.module';
import { ActivityModule } from '../activity/activity.module';
import { DocumentModule } from '../document/document.module';
import { TeamModule } from '../team/team.module';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    ProjectRoutingModule,
    RequirementModule,
    ActivityModule,
    DocumentModule,
    TeamModule,
  ],
  declarations: [ProjectComponent, ProjectFormComponent, ProjectListComponent, ProjectViewComponent,
    ProjectHomeComponent, ProjectRequirementListComponent],
  providers: [ProjectService]
})
export class ProjectModule { }
