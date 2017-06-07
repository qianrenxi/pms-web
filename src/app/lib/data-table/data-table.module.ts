import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule
  ],
  declarations: [DataTableComponent],
  exports: [DataTableComponent]
})
export class DataTableModule { }
