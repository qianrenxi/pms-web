import { Pagination } from 'app/common/core';
import { ProjectApiService } from 'app/common/api';
import { Project } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-project-list-pannel',
  templateUrl: './project-list-pannel.component.html',
  styleUrls: ['./project-list-pannel.component.scss']
})
export class ProjectListPannelComponent implements OnInit {

  @Input() params: any;
  @Input() size: number;

  @Input() width;
  @Input() height;
  @Input() color;

  projects: Project[];

  _title: string;
  @Input() set title(val: string) {
    this._title = val;
  }

  constructor(private projectApi: ProjectApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let page = new Pagination<any>();
    page.size = this.size || 10;
    this.projectApi.getAllOfPage(this.params, page).subscribe(
      data => {
        this.projects = data.content;
      }
    );
  }

}
