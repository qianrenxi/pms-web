import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectComponent } from './public/user-select/user-select.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { UserFormComponent } from './public/user-form/user-form.component';
import { UserAddComponent } from './views/user-add/user-add.component';
import { UserEditComponent } from './views/user-edit/user-edit.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './service/user.service';
import { FormsModule } from '@angular/forms';
import { CuiModule } from 'consoleui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CuiModule,
    UserRoutingModule
  ],
  declarations: [UserSelectComponent, UserListComponent, UserFormComponent, UserAddComponent, UserEditComponent],
  exports: [UserSelectComponent, UserFormComponent],
  providers: [UserService]
})
export class UserModule { }
