import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupLayoutComponent } from './views/group-layout/group-layout.component';


const routes: Routes = [
    { path: '', component: GroupLayoutComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GroupRoutingModule { }

export const routedComponents = [
    GroupLayoutComponent
];
