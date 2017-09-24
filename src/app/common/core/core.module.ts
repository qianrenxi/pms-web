import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpkHttpModule } from './http/spk-http.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    SpkHttpModule,
    AuthModule,
  ],
  declarations: []
})
export class CoreModule { }
