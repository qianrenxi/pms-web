import { ProjectPublicModule } from './public/project-public.module';
import { SharedModule } from 'app/common/shared';
import { routedComponents, ProjectRoutingModule } from './project-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    ProjectPublicModule,
    ProjectRoutingModule
  ],
  declarations: [...routedComponents],
  providers: []
})
export class ProjectModule { }
