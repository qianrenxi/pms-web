import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ErrorModule } from './error/error.module';
import { CuiModule } from 'consoleui';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    CuiModule,
    LayoutModule,
    ErrorModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    CuiModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CuiModule,
    LayoutModule,
    ErrorModule
  ]
})
export class SharedModule { }
