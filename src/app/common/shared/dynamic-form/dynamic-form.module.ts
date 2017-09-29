import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormItemComponent } from './dynamic-form-item/dynamic-form-item.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormBuilder } from './dynamic-form-builder';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldControlService } from './field-control.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [DynamicFormComponent, DynamicFormItemComponent],
  exports: [DynamicFormComponent, DynamicFormItemComponent],
  providers: [FieldControlService, DynamicFormBuilder]
})
export class DynamicFormModule { }
