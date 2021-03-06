import { CuiMessagesModule } from './messages/messages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiCoreModule } from './core/core.module'
import { PaginationModule } from './data/pagination/pagination.module';
import { DataTableModule } from './data/data-table/data-table.module';
import { LayoutModule } from './layout/layout.module';
import { SidenavModule } from './layout/sidenav/sidenav.module';
import { FileuploadModule } from './forms/fileupload/fileupload.module';
import { SidebarNavModule } from './layout/sidebar-nav/sidebar-nav.module';
import { CuiFormsModule } from './forms/forms.module';
import { CuiLayerModule } from './layer/layer.module';
import { CuiNavigationModule } from './navigation/navigation.module';
import { CuiUeditorModule } from './forms/ueditor/ueditor.module';
import { CuiTreeModule } from './data/tree/tree.module';

const CUI_MODULES = [
  CuiCoreModule,
  LayoutModule,
  PaginationModule,
  DataTableModule,
  SidenavModule,
  FileuploadModule,
  SidebarNavModule,
  CuiFormsModule,
  CuiLayerModule,
  CuiNavigationModule,
  CuiUeditorModule,
  CuiTreeModule,
  CuiMessagesModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...CUI_MODULES
  ],
  exports: [
    ...CUI_MODULES
  ],
})
export class CuiModule { }

export * from './layer';
export * from './data';
export * from './navigation';
export * from './forms/dynamic-form';
export * from './forms/validators';
export * from './messages';
