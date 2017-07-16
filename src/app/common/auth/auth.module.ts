import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { SpkHttpModule } from '../http/spk-http.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SpkHttpModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
