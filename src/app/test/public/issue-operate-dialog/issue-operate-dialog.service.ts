import { Injectable } from '@angular/core';
import { Issue } from 'app/common/entity';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { IssueTimeDialogComponent } from './issue-time-dialog/issue-time-dialog.component';
import { IssueVerifyDialogComponent } from './issue-verify-dialog/issue-verify-dialog.component';
import { IssueAssignDialogComponent } from './issue-assign-dialog/issue-assign-dialog.component';
import { IssueResolveDialogComponent } from './issue-resolve-dialog/issue-resolve-dialog.component';
import { IssueCloseDialogComponent } from './issue-close-dialog/issue-close-dialog.component';

const OPERATE_DIALOGS = {
    time: { title: '登记工时', component: IssueTimeDialogComponent },
    verify: { title: '确认', component: IssueVerifyDialogComponent },
    assign: { title: '指派', component: IssueAssignDialogComponent },
    resolve: { title: '解决', component: IssueResolveDialogComponent },
    close: { title: '关闭', component: IssueCloseDialogComponent },
    // active: {title: '激活', component: TaskActiveDialogComponent},
};

@Injectable()
export class IssueOperateDialogService {

    constructor(private modal: NzModalService) { }


    openTime(issue: Issue, ok?, cancel?): NzModalSubject {
        return this.open(issue, 'time', ok, cancel);
    }

    openVerify(issue: Issue, ok?, cancel?): NzModalSubject {
        return this.open(issue, 'verify', ok, cancel);
    }

    openAssign(issue: Issue, ok?, cancel?): NzModalSubject {
        return this.open(issue, 'assign', ok, cancel);
    }

    openResolve(issue: Issue, ok?, cancel?): NzModalSubject {
        return this.open(issue, 'resolve', ok, cancel);
    }

    openClose(issue: Issue, ok?, cancel?): NzModalSubject {
        return this.open(issue, 'close', ok, cancel);
    }

    open(issue: Issue, operate: string, ok?, cancel?): NzModalSubject {
        return this.openDialog(issue, operate, ok, cancel);
    }

    openDialog(issue: Issue, operate: string, ok?, cancel?): NzModalSubject {
        let dialog = OPERATE_DIALOGS[operate];
        return this._openDialog(issue, dialog.title, dialog.component, ok, cancel);
    }

    private _openDialog(issue: Issue, operate: string, content: any, ok?, cancel?): NzModalSubject {
        const subscription = this.modal.open({
            title: `${issue.name} > ${operate}`,
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
                issue: issue
            }
        });
        return subscription;
    }
}
