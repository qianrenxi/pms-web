import { PortalRoutingModule, routedComponents } from './portal-routing.module';
import { SharedModule } from 'app/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    PortalRoutingModule
  ],
  declarations: [...routedComponents]
})
export class PortalModule { }
