import { CuiModule } from 'consoleui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
  ],
  declarations: [MemberListComponent]
})
export class TeamModule { }
