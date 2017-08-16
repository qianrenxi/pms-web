import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuiModule } from 'consoleui';
import { ProductSelectComponent } from './product-select/product-select.component';
import { ProductService } from '../../service/product.service';
import { BmodSelectComponent } from './bmod-select/bmod-select.component';
import { BmodService } from '../../service/bmod.service';
import { ModuleSelectComponent } from './module-select/module-select.component';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
  ],
  declarations: [ProductSelectComponent, BmodSelectComponent, ModuleSelectComponent],
  exports: [ProductSelectComponent, BmodSelectComponent, ModuleSelectComponent],
  providers: [ProductService, BmodService],
})
export class ProductPublicModule { }
