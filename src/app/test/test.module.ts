import { TestPublicModule } from './public/public.module';
import { ProjectPublicModule } from './../project/public/project-public.module';
import { ProductPublicModule } from './../product/public/public.module';
import { TestRoutingModule, routedComponents } from './test-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
SharedModule,
    RouterModule,
    ProjectPublicModule,
    ProductPublicModule,
    TestPublicModule,
    TestRoutingModule,
  ],
  declarations: [...routedComponents]
})
export class TestModule { }
