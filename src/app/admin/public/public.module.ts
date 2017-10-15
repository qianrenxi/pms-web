import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';

const PUBLIC_COMPONENTS = [
  AdminToolbarComponent
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS]
})
export class AdminPublicModule { }
