import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupLayoutComponent } from './views/group-layout/group-layout.component';
import { UserListComponent } from './views/user-list/user-list.component';


const routes: Routes = [
    {
        path: '', component: GroupLayoutComponent, children: [
            {
                path: 'user', children: [
                    { path: '', component: UserListComponent }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GroupRoutingModule { }

export const routedComponents = [
    GroupLayoutComponent,
    UserListComponent,
];
