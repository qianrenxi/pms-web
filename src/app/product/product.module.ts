import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'angular-tree-component';
import { RequirementModule } from '../requirement';
import { ActivityModule } from '../activity';
import { DocumentModule } from '../document';

import { CuiModule } from 'consoleui';
import { UserModule } from '../org/user/user.module';
import { ProductService } from '../service/product.service';
import { BmodService } from '../service/bmod.service';
import { ProductRoutingModule, routedComponents } from './product-routing.module';
import { ProductFormComponent } from './public/product-form/product-form.component';
import { ModuleTreeComponent } from './public/module-tree/module-tree.component';
import { ProductJumpBoxComponent } from './public/product-jump-box/product-jump-box.component';

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
    UserModule
  ],
  declarations: [...routedComponents,
    ProductFormComponent,
    ModuleTreeComponent,
    ProductJumpBoxComponent,
  ],
  providers: [ProductService, BmodService],
  exports: [ProductJumpBoxComponent]
})
export class ProductModule { }
