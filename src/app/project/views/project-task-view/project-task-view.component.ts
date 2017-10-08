import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TaskApiService } from 'app/common/api';
import { TaskOperateDialogService } from './../../public/task-operate-dialog/task-operate-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-task-view',
  templateUrl: './project-task-view.component.html',
  styleUrls: ['./project-task-view.component.scss']
})
export class ProjectTaskViewComponent implements OnInit {

  task: Task;
  near: {prev?: Task, next?: Task};

  remark;
  _showRemark;

  constructor(private router: Router, private route: ActivatedRoute,
    private taskApi: TaskApiService, private taskOperate: TaskOperateDialogService,
    private message: NzMessageService, private modal: NzModalService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {task: Task}) => {
      this.task = data.task;

      this.loadNear();
    });
  }

  loadNear() {
    let taskId = this.task ? this.task.id : 0;
    this.taskApi.getNear(taskId).subscribe(
      near => this.near = near
    );
  }

  operate(event, operate: string) {
    this.taskOperate.open(this.task, operate);
  }

  showRemark() {
    this._showRemark = true;
  }

  hideRemark() {
    this._showRemark = false;
  }

  toggleRemark() {
    this._showRemark = !this._showRemark;
  }

  saveRemark() {
    if (this.remark) {
      this.taskApi.remark(this.task.id, {remark: this.remark}).subscribe(
        ok => {
          this.message.success('添加备注成功');
          this.remark = null;
        },
        err => {
          this.message.error('添加备注失败');
        }
      );
    }
  }

  delete() {
    this.modal.confirm({
      title  : '您是否确认要删除这个任务',
      content: '任务删除后关联的任务、问题和测试不会级联删除，需要手动清理。',
      onOk: () => {
        this.doDelete();
      },
      onCancel() {
      }
    });
  }

  prev() {
    if (this.near.prev) {
      this.router.navigate(['../../', this.near.prev.id, 'view'], {relativeTo: this.route});
    }
  }

  next() {
    if (this.near.next) {
      this.router.navigate(['../../', this.near.next.id, 'view'], {relativeTo: this.route});
    }
  }

  doDelete() {
    let taskId = this.task.id;
    this.taskApi.delete([taskId]).subscribe(
      ok => {
        this.message.success('删除成功');
        this.toList();
      },
      err => {
        this.message.error('删除失败，请重试');
      }
    );
  }

  toList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
