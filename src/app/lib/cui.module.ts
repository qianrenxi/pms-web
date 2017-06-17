import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiCoreModule } from './core/core.module'
import { PaginationModule } from './pagination/pagination.module';
import { DataTableModule } from './data-table/data-table.module';
import { SelectModule } from './select/select.module';
import { DialogModule } from './dialog/dialog.module';

const CUI_MODULES = [
  CuiCoreModule,
  PaginationModule,
  DataTableModule,
  SelectModule,
  DialogModule,
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
