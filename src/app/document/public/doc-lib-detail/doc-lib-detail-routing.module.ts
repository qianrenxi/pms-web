import { DocumentDetailResolver } from './../../service/document-detail-resolver.service';
import { DoclibDetailResolver } from './../../service/doclib-detail-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocLibDetailComponent } from './doc-lib-detail.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentAddComponent } from './document-add/document-add.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { DocumentViewComponent } from './document-view/document-view.component';

const routes: Routes = [
    {
        path: '', component: DocLibDetailComponent, children: [
            {
                path: '', resolve: { docLib: DoclibDetailResolver }, children: [
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
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [DoclibDetailResolver, DocumentDetailResolver],
})
export class DocLibDetailRoutingModule { }

export const routedComponents = [
    DocLibDetailComponent,

    DocumentListComponent,
    DocumentViewComponent,
    DocumentAddComponent,
    DocumentEditComponent,
];
