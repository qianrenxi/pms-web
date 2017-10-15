import { DocumentLayoutComponent } from './views/document-layout/document-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DocumentLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentRoutingModule { }

export const routedComponents = [
    DocumentLayoutComponent
];
