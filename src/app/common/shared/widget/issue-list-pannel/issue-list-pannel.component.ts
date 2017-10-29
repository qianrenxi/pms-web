import { Pagination } from 'app/common/core';
import { IssueApiService } from 'app/common/api';
import { Issue } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-issue-list-pannel',
  templateUrl: './issue-list-pannel.component.html',
  styleUrls: ['./issue-list-pannel.component.scss']
})
export class IssueListPannelComponent implements OnInit {

  @Input() params: any;
  @Input() size: number;

  @Input() width;
  @Input() height;
  @Input() color;

  issues: Issue[];

  _title: string;
  @Input() set title(val: string) {
    this._title = val;
  }

  constructor(private issueApi: IssueApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let page = new Pagination<any>();
    page.size = this.size || 10;
    this.issueApi.getAllOfPage(this.params, page).subscribe(
      data => {
        this.issues = data.content;
      }
    );
  }

}
