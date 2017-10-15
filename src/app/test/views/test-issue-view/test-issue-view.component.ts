import { Component, OnInit } from '@angular/core';
import { Issue } from 'app/common/entity';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { IssueApiService } from 'app/common/api';
import { IssueOperateDialogService } from './../../public/issue-operate-dialog/issue-operate-dialog.service';

@Component({
  selector: 'pms-test-issue-view',
  templateUrl: './test-issue-view.component.html',
  styleUrls: ['./test-issue-view.component.scss']
})
export class TestIssueViewComponent implements OnInit {

  issue: Issue;
  near: { prev?: Issue, next?: Issue };

  remark;
  _showRemark;

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private issueApi: IssueApiService,
    private modal: NzModalService, private issueOperate: IssueOperateDialogService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { issue: Issue }) => {
      this.issue = data.issue;
    })
  }


  loadNear() {
    let issueId = this.issue ? this.issue.id : 0;
    /* this.issueApi.getNear(issueId).subscribe(
      near => this.near = near
    ); */
  }

  operate(event, operate: string) {
    this.issueOperate.open(this.issue, operate);
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
      /* this.issueApi.remark(this.issue.id, {remark: this.remark}).subscribe(
        ok => {
          this.message.success('添加备注成功');
          this.remark = null;
        },
        err => {
          this.message.error('添加备注失败');
        }
      );*/
    }
  }

  delete() {
    this.modal.confirm({
      title: '您是否确认要删除这个任务',
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
      this.router.navigate(['../../', this.near.prev.id, 'view'], { relativeTo: this.route });
    }
  }

  next() {
    if (this.near.next) {
      this.router.navigate(['../../', this.near.next.id, 'view'], { relativeTo: this.route });
    }
  }

  doDelete() {
    let issueId = this.issue.id;
    this.issueApi.delete([issueId]).subscribe(
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
