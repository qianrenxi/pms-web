import { DocumentLayoutComponent } from './views/document-layout/document-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocHomeComponent } from './views/doc-home/doc-home.component';

const routes: Routes = [
    {
        path: '', component: DocumentLayoutComponent, children: [
            { path: '', component: DocHomeComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DocumentRoutingModule { }

export const routedComponents = [
    DocumentLayoutComponent,
    DocHomeComponent,
];
