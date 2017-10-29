import { Pagination } from 'app/common/core';
import { TaskApiService } from 'app/common/api';
import { Task } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-task-list-pannel',
  templateUrl: './task-list-pannel.component.html',
  styleUrls: ['./task-list-pannel.component.scss']
})
export class TaskListPannelComponent implements OnInit {
  
  @Input() params: any;
  @Input() size: number;

  @Input() width;
  @Input() height;
  @Input() color;

  tasks: Task[];

  _title: string;
  @Input() set title(val: string) {
    this._title = val;
  }

  constructor(private taskApi: TaskApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let page = new Pagination<any>();
    page.size = this.size || 10;
    this.taskApi.getAllOfPage(this.params, page).subscribe(
      data => {
        this.tasks = data.content;
      }
    );
  }

}
