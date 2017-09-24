import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardHomeComponent } from './views/dashboard-home/dashboard-home.component';

const routes: Routes = [
    { path: '', component: DashboardHomeComponent},
    // { path: 'dashboard', component: DashboardHomeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [DashboardHomeComponent];
