import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/common/shared';
import { routedComponents, ProductRoutingModule } from './product-routing.module';
import { ProductPublicModule } from './public/public.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
    ProductPublicModule
  ],
  declarations: [...routedComponents, ]
})
export class ProductModule { }
