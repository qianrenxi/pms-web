import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuiModule } from './../lib/cui.module';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssueViewComponent } from './issue-view/issue-view.component';
import { IssueRoutingModule } from './issue-routing.module';
import { IssueDataTableComponent } from './issue-data-table/issue-data-table.component';
import { IssueService } from '../service/issue.service';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    IssueRoutingModule
  ],
  declarations: [IssueListComponent, IssueCreateComponent, IssueEditComponent, IssueViewComponent, IssueDataTableComponent],
  providers: [IssueService]
})
export class IssueModule { }
