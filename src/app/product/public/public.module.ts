import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/common/shared';
import { ProductToolbarComponent } from './product-toolbar/product-toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [ProductToolbarComponent],
  exports: [ProductToolbarComponent]
})
export class ProductPublicModule { }
