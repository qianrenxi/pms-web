import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileuploadComponent } from './fileupload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileuploadComponent],
  exports: [FileuploadComponent]
})
export class FileuploadModule { }
