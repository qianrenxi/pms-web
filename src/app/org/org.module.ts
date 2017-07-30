import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './views/org/org.component';
import { OrgRoutingModule } from './org-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrgRoutingModule
  ],
  declarations: [OrgComponent]
})
export class OrgModule { }
