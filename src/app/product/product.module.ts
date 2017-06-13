import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'angular-tree-component';
import { RequirementModule } from '../requirement';
import { ActivityModule } from '../activity';
import { DocumentModule } from '../document';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductRequirementListComponent } from './product-requirement-list/product-requirement-list.component';
import { CuiModule } from '../lib';
import { ProductModuleComponent } from './product-module/product-module.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductService } from '../service/product.service';
import { BmodService } from '../service/bmod.service';
import { ModuleTreeComponent } from './module-tree/module-tree.component';
import { ReleaseListComponent } from './release/release-list/release-list.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    CuiModule,
    TreeModule,
    ProductRoutingModule,
    RequirementModule,
    ActivityModule,
    DocumentModule,
  ],
  declarations: [ProductComponent, ProductHomeComponent, ProductListComponent,
    ProductFormComponent, ProductRequirementListComponent, ProductModuleComponent,
    ProductViewComponent, ModuleTreeComponent, ReleaseListComponent, ProjectListComponent],
  providers: [ProductService, BmodService]
})
export class ProductModule { }
