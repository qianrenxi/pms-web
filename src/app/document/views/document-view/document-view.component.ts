import { DocumentApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { DocLib, Document } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.scss']
})
export class DocumentViewComponent implements OnInit {
  docLib: DocLib;
  document: Document;

  near: { prev?: Document, next?: Document };

  remark;
  _showRemark;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private message: NzMessageService,
    private documentApi: DocumentApiService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { docLib: DocLib, document: Document }) => {
      this.docLib = data.docLib;
      this.document = data.document;
    });
  }

  loadNear() {
    // let issueId = this.issue ? this.issue.id : 0;
    /* this.issueApi.getNear(issueId).subscribe(
      near => this.near = near
    ); */
  }

  /* operate(event, operate: string) {
    this.issueOperate.open(this.issue, operate);
  } */

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

  toList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
