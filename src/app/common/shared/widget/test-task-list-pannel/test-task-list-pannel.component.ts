import { Pagination } from 'app/common/core';
import { TestTaskApiService } from 'app/common/api';
import { TestTask } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-test-task-list-pannel',
  templateUrl: './test-task-list-pannel.component.html',
  styleUrls: ['./test-task-list-pannel.component.scss']
})
export class TestTaskListPannelComponent implements OnInit {

  @Input() params: any;
  @Input() size: number;

  @Input() width;
  @Input() height;
  @Input() color;

  tasks: TestTask[];

  _title: string;
  @Input() set title(val: string) {
    this._title = val;
  }

  constructor(private testTaskApi: TestTaskApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let page = new Pagination<any>();
    page.size = this.size || 10;
    this.testTaskApi.getAllOfPage(this.params, page).subscribe(
      data => {
        this.tasks = data.content;
      }
    );
  }

}
