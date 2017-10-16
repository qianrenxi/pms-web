import { DocumentDetailResolver } from './service/document-detail-resolver.service';
import { DoclibDetailResolver } from './service/doclib-detail-resolver.service';
import { DocumentLayoutComponent } from './views/document-layout/document-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocHomeComponent } from './views/doc-home/doc-home.component';

import { DocumentListComponent } from './views/document-list/document-list.component';
import { DocumentViewComponent } from './views/document-view/document-view.component';
import { DocumentAddComponent } from './views/document-add/document-add.component';
import { DocumentEditComponent } from './views/document-edit/document-edit.component';

const routes: Routes = [
    {
        path: '', component: DocumentLayoutComponent, children: [
            { path: '', component: DocHomeComponent },
            {
                path: ':docLibId', resolve: { docLib: DoclibDetailResolver }, children: [
                    { path: '', component: DocumentListComponent },
                    { path: 'add', component: DocumentAddComponent },
                    {
                        path: ':documentId', resolve: { document: DocumentDetailResolver }, children: [
                            { path: '', redirectTo: 'view', pathMatch: 'full' },
                            { path: 'view', component: DocumentViewComponent },
                            { path: 'edit', component: DocumentEditComponent },
                        ]
                    }
                ]
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [DoclibDetailResolver, DocumentDetailResolver]
})
export class DocumentRoutingModule { }

export const routedComponents = [
    DocumentLayoutComponent,
    DocHomeComponent,

    DocumentListComponent,
    DocumentViewComponent,
    DocumentAddComponent,
    DocumentEditComponent,
];
