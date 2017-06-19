import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../service/account.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: [AccountService]
})
export class AccountModule { }
