import { Component, OnInit } from '@angular/core';
import { PaginationModel } from 'consoleui';
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
      {title: 'ID', data: 'id'},
      {title: '任务名称', data: 'name', tpl: 'nameTpl'},
      {title: '状态', data: 'status'},
      {title: '创建人', data: 'createdBy.name'},
      {title: '创建时间', data: 'createdDate'},
      {title: '指派给', data: 'assignedTo.name'},
    ];

    this.pagination = new PaginationModel(90, 15, 1);

    this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks
    );
  }

}
