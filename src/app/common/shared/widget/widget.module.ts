import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributeSelectComponent } from './attribute-select/attribute-select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectComponent } from './user-select/user-select.component';
import { ChangeLogComponent } from './change-log/change-log.component';

const WIDGETS = [
  AttributeSelectComponent,
  UserSelectComponent,
  ChangeLogComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [...WIDGETS],
  exports: [...WIDGETS]
})
export class WidgetModule { }