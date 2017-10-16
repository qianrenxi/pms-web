import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { DoclibAddDialogComponent } from './doclib-add-dialog/doclib-add-dialog.component';
import { Injectable } from '@angular/core';

const OPERATE_DIALOGS = {
    docLibAdd: {title: '添加文档库', component: DoclibAddDialogComponent},
};

@Injectable()
export class DocOperateDialogService {

    constructor(private modal: NzModalService) { }

    openDocLibAdd(params: any, ok?, cancel?): NzModalSubject {
        return this.open(params, 'docLibAdd', ok, cancel);
    }

    open(params: any, operate: string, ok?, cancel?): NzModalSubject {
        return this.openDialog(params, operate, ok, cancel);
    }

    openDialog(params: any, operate: string, ok?, cancel?): NzModalSubject {
        let dialog = OPERATE_DIALOGS[operate];
        return this._openDialog(params, dialog.title, dialog.component, ok, cancel);
    }

    private _openDialog(params: any, operate: string, content: any, ok?, cancel?): NzModalSubject {
        const subscription = this.modal.open({
            title: `${operate}`,
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
            componentParams: params
        });
        return subscription;
    }
}
