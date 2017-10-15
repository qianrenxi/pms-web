import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/common';
import { AdminPublicModule } from './public/public.module';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AdminPublicModule,
    AdminRoutingModule
  ],
  declarations: [...routedComponents]
})
export class AdminModule { }
