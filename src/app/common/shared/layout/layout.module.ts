import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  declarations: [MainLayoutComponent, LayoutHeaderComponent],
  exports: [MainLayoutComponent, LayoutHeaderComponent]
})
export class LayoutModule { }
