import { WidgetModule } from './widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ErrorModule } from './error/error.module';
import { CuiModule } from 'consoleui';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    CuiModule,
    LayoutModule,
    ErrorModule,
    DynamicFormModule,
    WidgetModule
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
    ErrorModule,
    DynamicFormModule,
    WidgetModule
  ]
})
export class SharedModule { }
