import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildListComponent } from './build-list/build-list.component';
import { CuiModule } from '../../lib/cui.module';
import { BuildRoutingModule } from './build-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    BuildRoutingModule,
  ],
  declarations: [BuildListComponent]
})
export class BuildModule { }
