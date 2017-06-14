import { Component, OnInit } from '@angular/core';
import { Task } from '../../entity/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'pms-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();

    this.taskService.getTask(1).subscribe(
      task => this.task = task
    );
  }

}
