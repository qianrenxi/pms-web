import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupToolbarComponent } from './group-toolbar/group-toolbar.component';

const PUBLIC_COMPONENTS = [
  GroupToolbarComponent
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS]
})
export class GroupPublicModule { }
