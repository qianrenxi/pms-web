import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssueViewComponent } from './issue-view/issue-view.component';
import { IssueRoutingModule } from './issue-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IssueRoutingModule
  ],
  declarations: [IssueListComponent, IssueCreateComponent, IssueEditComponent, IssueViewComponent]
})
export class IssueModule { }
