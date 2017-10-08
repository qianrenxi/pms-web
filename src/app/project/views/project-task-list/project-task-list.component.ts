import { TaskOperateDialogService } from './../../public/task-operate-dialog/task-operate-dialog.service';
import { ProjectApiService } from 'app/common/api';
import { TaskApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { Column } from 'consoleui';
import { Task } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Project } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-task-list',
  templateUrl: './project-task-list.component.html',
  styleUrls: ['./project-task-list.component.scss']
})
export class ProjectTaskListComponent implements OnInit {

  project: Project;

  data: Pagination<Task>;
  selection: Task[];
  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '优先级', data: 'priority' },
    { title: '任务名称', tpl: 'name' },
    { title: '状态', tpl: 'status' },
    { title: '创建日期', tpl: 'createdDate' },
    { title: '截止日期', tpl: 'deadline' },
    { title: '指派给', data: 'assignedToDisplayName' },
    { title: '完成者', data: 'completedByDisplayName' },
    { title: '完成日期', tpl: 'completedDate' },
    { title: '预计工时', data: 'estimate', defaultValue: 0, styleClass: 'text-center' },
    { title: '消耗', data: 'usedTime', defaultValue: 0, styleClass: 'text-center' },
    { title: '剩余', data: 'leftTime', defaultValue: 0, styleClass: 'text-center' },
    { title: '进度', tpl: 'progress', defaultValue: 0, styleClass: 'text-center' },
    { title: '相关需求', data: '' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private taskApi: TaskApiService,
    private projectApi: ProjectApiService, private taskOperate: TaskOperateDialogService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { project: Project }) => {
      this.project = data.project;

      this.loadData();
    });
  }

  loadData() {
    this.projectApi.getTasks(this.project.id).subscribe(
      data => {
        this.data = data
      }
    );
  }

  getProgress(row: Task) {
    if ((row.estimate || (row.usedTime + row.leftTime)) > 0 ) {
      return Math.floor(row.usedTime * 100 / (row.estimate || (row.usedTime + row.leftTime)));
    }
    return 0;
  }

  operate(task: Task, operate: string) {
    this.taskOperate.open(task, operate, () => {
      this.loadData();
    });
  }

  delete(taskId?: number) {
    if (!taskId && (!this.selection || this.selection.length == 0)) {
      this.message.warning('请选择一个要删除的任务');
      return;
    }

    let taskIds = taskId ? [taskId] : this.selection.map(it => it.id);

    this.taskApi.delete(taskIds).subscribe(
      ok => {
        this.message.success('删除成功');
        this.loadData();
      },
      err => {
        this.message.error('删除失败，请重试');
      }
    );
  }
}
