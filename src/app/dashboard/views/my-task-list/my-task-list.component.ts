import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Component, OnInit } from '@angular/core';
import { Column } from 'consoleui';
import { TaskOperateDialogService } from './../../../project/public/task-operate-dialog/task-operate-dialog.service';

@Component({
  selector: 'pms-my-task-list',
  templateUrl: './my-task-list.component.html',
  styleUrls: ['./my-task-list.component.scss']
})
export class MyTaskListComponent implements OnInit {

  data: Pagination<Task>;
  selection: Task[];
  loading;

  columns: Column[] = [
    {title: 'ID', data: 'id'},
    {title: '优先级', data: 'priority'},
    {title: '所属项目', tpl: 'project'},
    {title: '任务名称', tpl: 'name'},
    {title: '创建者', data: 'createdByDisplayName'},
    {title: '指派给', data: 'assignedToDisplayName'},
    {title: '完成者', data: 'completedByDisplayName'},
    {title: '预计(时)', data: 'estimate', defaultValue: '0', styleClass: 'text-center'},
    {title: '消耗', data: 'usedTime', defaultValue: '0', styleClass: 'text-center'},
    {title: '剩余', data: 'leftTime', defaultValue: '0', styleClass: 'text-center'},
    {title: '截止', data: 'deadline', styleClass: 'text-center'},
    {title: '状态', data: 'status', styleClass: 'text-center'},
    {title: '操作', tpl: 'actions', styleClass: 'text-center'},
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private taskOperate: TaskOperateDialogService) { }

  ngOnInit() {
  }

  loadData() {

  }

  operate(task: Task, operate: string) {
    this.taskOperate.open(task, operate, () => {
      this.loadData();
    });
  }

}
