import { DocumentRoutingModule, routedComponents } from './document-routing.module';
import { DocumentPublicModule } from './public/public.module';
import { SharedModule } from 'app/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    SharedModule,
    DocumentPublicModule,
    DocumentRoutingModule,
  ],
  declarations: [...routedComponents]
})
export class DocumentModule { }
