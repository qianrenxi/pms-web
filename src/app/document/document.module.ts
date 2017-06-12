import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibListComponent } from './lib-list/lib-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibListComponent],
  exports: [LibListComponent]
})
export class DocumentModule { }
