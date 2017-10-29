import { Pagination } from 'app/common/core';
import { RequirementApiService } from 'app/common/api';
import { Requirement } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-requirement-list-pannel',
  templateUrl: './requirement-list-pannel.component.html',
  styleUrls: ['./requirement-list-pannel.component.scss']
})
export class RequirementListPannelComponent implements OnInit {

  @Input() params: any;
  @Input() size: number;

  @Input() width;
  @Input() height;
  @Input() color;

  requirements: Requirement[];

  _title: string;
  @Input() set title(val: string) {
    this._title = val;
  }

  constructor(private requirementApi: RequirementApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let page = new Pagination<any>();
    page.size = this.size || 10;
    this.requirementApi.getAllOfPage(this.params, page).subscribe(
      data => {
        this.requirements = data.content;
      }
    );
  }

}
