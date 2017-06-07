import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from './pagination/pagination.module';
import { DataTableModule } from './data-table/data-table.module';

const CUI_MODULES = [
  PaginationModule,
  DataTableModule
];

@NgModule({
  imports: [
    CommonModule,
    ...CUI_MODULES
  ],
  exports: [
    ...CUI_MODULES
  ],
  declarations: []
})
export class CuiModule { }
