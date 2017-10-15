import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportToolbarComponent } from './report-toolbar/report-toolbar.component';

const PUBLIC_COMPONENTS = [
  ReportToolbarComponent
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS]
})
export class ReportPublicModule { }
