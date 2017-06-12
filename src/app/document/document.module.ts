import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibListComponent } from './lib-list/lib-list.component';
import { LibCreateComponent } from './lib-create/lib-create.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibListComponent, LibCreateComponent],
  exports: [LibListComponent],
})
export class DocumentModule { }
