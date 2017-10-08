import { ProjectCloseDialogComponent } from './project-close-dialog/project-close-dialog.component';
import { ProjectPauseDialogComponent } from './project-pause-dialog/project-pause-dialog.component';
import { ProjectDelayDialogComponent } from './project-delay-dialog/project-delay-dialog.component';
import { ProjectStartDialogComponent } from './project-start-dialog/project-start-dialog.component';
import { Project } from 'app/common/entity';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectOperateDialogService {

    constructor(private modal: NzModalService) { }

    openStart(project: Project, ok?, cancel?): NzModalSubject {
        return this.openDialog(project, '开始', ProjectStartDialogComponent, ok, cancel);
    }

    openDelay(project: Project, ok?, cancel?): NzModalSubject {
        return this.openDialog(project, '延期', ProjectDelayDialogComponent, ok, cancel);
    }

    openPause(project: Project, ok?, cancel?): NzModalSubject {
        return this.openDialog(project, '挂起', ProjectPauseDialogComponent, ok, cancel);
    }

    openClose(project: Project, ok?, cancel?): NzModalSubject {
        return this.openDialog(project, '关闭', ProjectCloseDialogComponent, ok, cancel);
    }

    private openDialog(project: Project, operate: string, content: any, ok?, cancel?): NzModalSubject {
        const subscription = this.modal.open({
            title: `${project.name} > ${operate}`,
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
            componentParams: {
                project: project
            }
        });
        return subscription;
    }
}
