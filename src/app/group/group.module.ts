import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/common';
import { GroupPublicModule } from './public/public.module';
import { GroupRoutingModule, routedComponents } from './group-routing.module';

@NgModule({
  imports: [
    SharedModule,
    GroupPublicModule,
    GroupRoutingModule
  ],
  declarations: [...routedComponents]
})
export class GroupModule { }
