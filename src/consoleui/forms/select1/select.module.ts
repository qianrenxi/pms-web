import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { CuiCoreModule } from '../../core/core.module';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    CuiCoreModule,
    TreeModule
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule { }
