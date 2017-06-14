import { Component, OnInit } from '@angular/core';
import { PaginationModel } from '../../lib/pagination/pagination.model';
import { Task } from '../../entity/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'pms-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  sideOpen = true;
  columns;
  pagination: PaginationModel;
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.columns = [
      {title: 'ID', prop: 'id'},
      {title: '任务名称', prop: 'name', tpl: 'nameTpl'},
      {title: '状态', prop: 'status'},
      {title: '创建人', prop: 'createdBy.name'},
      {title: '创建时间', prop: 'createdDate'},
      {title: '指派给', prop: 'assignedTo.name'},
    ];

    this.pagination = new PaginationModel(90, 15, 1);

    this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks
    );
  }

}
