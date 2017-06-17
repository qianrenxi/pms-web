import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuiModule } from '../../lib/cui.module';
import { ProductSelectComponent } from './product-select/product-select.component';
import { ProductService } from '../../service/product.service';
import { BmodSelectComponent } from './bmod-select/bmod-select.component';
import { BmodService } from '../../service/bmod.service';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
  ],
  declarations: [ProductSelectComponent, BmodSelectComponent],
  exports: [ProductSelectComponent, BmodSelectComponent],
  providers: [ProductService, BmodService],
})
export class ProductPublicModule { }
