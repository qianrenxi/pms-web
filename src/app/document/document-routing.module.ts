import { DocumentDetailResolver } from './service/document-detail-resolver.service';
import { DoclibDetailResolver } from './service/doclib-detail-resolver.service';
import { DocumentLayoutComponent } from './views/document-layout/document-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocHomeComponent } from './views/doc-home/doc-home.component';

const routes: Routes = [
    {
        path: '', component: DocumentLayoutComponent, children: [
            { path: '', component: DocHomeComponent },
            { path: ':docLibId', loadChildren: 'app/document/public/doc-lib-detail/doc-lib-detail.module#DocLibDetailModule' },
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
