import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgComponent } from './views/org/org.component';

const routes: Routes = [
    {
        path: '', component: OrgComponent,
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', loadChildren: 'app/org/user/user.module#UserModule' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrgRoutingModule { }

export const routedComponents = [OrgComponent];
