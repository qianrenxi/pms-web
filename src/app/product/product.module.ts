import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'angular-tree-component';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductRequirementListComponent } from './product-requirement-list/product-requirement-list.component';
import { CuiModule } from '../lib';
import { ProductModuleComponent } from './product-module/product-module.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ProductRoutingModule,
    CuiModule,
    TreeModule
  ],
  declarations: [ProductComponent, ProductHomeComponent, ProductListComponent,
    ProductFormComponent, ProductRequirementListComponent, ProductModuleComponent]
})
export class ProductModule { }
