import { Task } from 'app/common/entity';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';

import { TaskAssignDialogComponent } from './task-assign-dialog/task-assign-dialog.component';
import { TaskStartDialogComponent } from './task-start-dialog/task-start-dialog.component';
import { TaskPauseDialogComponent } from './task-pause-dialog/task-pause-dialog.component';
import { TaskRestartDialogComponent } from './task-restart-dialog/task-restart-dialog.component';
import { TaskTimeEntriesDialogComponent } from './task-time-entries-dialog/task-time-entries-dialog.component';
import { TaskCompleteDialogComponent } from './task-complete-dialog/task-complete-dialog.component';
import { TaskCancelDialogComponent } from './task-cancel-dialog/task-cancel-dialog.component';
import { TaskCloseDialogComponent } from './task-close-dialog/task-close-dialog.component';
import { TaskActiveDialogComponent } from './task-active-dialog/task-active-dialog.component';

const OPERATE_DIALOGS = {
    assign: {title: '指派', component: TaskAssignDialogComponent},
    start: {title: '开始', component: TaskStartDialogComponent},
    pause: {title: '挂起', component: TaskPauseDialogComponent},
    restart: {title: '继续', component: TaskRestartDialogComponent},
    timeEntries: {title: '登记工时', component: TaskTimeEntriesDialogComponent},
    complete: {title: '完成', component: TaskCompleteDialogComponent},
    cancel: {title: '取消', component: TaskCancelDialogComponent},
    close: {title: '关闭', component: TaskCloseDialogComponent},
    active: {title: '激活', component: TaskActiveDialogComponent},
};

@Injectable()
export class TaskOperateDialogService {

    constructor(private modal: NzModalService) { }

    openAssign(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'assign', ok, cancel);
    }

    openStart(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'start', ok, cancel);
    }

    openPause(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'pause', ok, cancel);
    }

    openRestart(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'restart', ok, cancel);
    }

    openTimeEntries(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'timeEntries', ok, cancel);
    }

    openComplete(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'complete', ok, cancel);
    }

    openCancel(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'cancel', ok, cancel);
    }

    openClose(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'close', ok, cancel);
    }

    openActive(task: Task, ok?, cancel?): NzModalSubject {
        return this.open(task, 'active', ok, cancel);
    }

    open(task: Task, operate: string, ok?, cancel?): NzModalSubject {
        return this.openDialog(task, operate, ok, cancel);
    }

    openDialog(task: Task, operate: string, ok?, cancel?): NzModalSubject {
        let dialog = OPERATE_DIALOGS[operate];
        return this._openDialog(task, dialog.title, dialog.component, ok, cancel);
    }

    private _openDialog(task: Task, operate: string, content: any, ok?, cancel?): NzModalSubject {
        const subscription = this.modal.open({
            title: `${task.name} > ${operate}`,
            content: content,
            onOk() {
                if (ok) {
                    ok();
                }
            },
            onCancel() {
                if (cancel) {
                    cancel();
                }
            },
            footer: false,
            maskClosable: false,
            width: 768,
            componentParams: {
                task: task
            }
        });
        return subscription;
    }
}
