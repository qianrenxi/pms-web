import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { TestHomeComponent } from './test-home/test-home.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    ProductModule,
  ],
  declarations: [TestComponent, TestHomeComponent, ]
})
export class TestModule { }
