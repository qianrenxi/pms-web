import { TestPublicModule } from './public/public.module';
import { TestRoutingModule, routedComponents } from './test-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    TestPublicModule,
    TestRoutingModule,
  ],
  declarations: [...routedComponents]
})
export class TestModule { }
