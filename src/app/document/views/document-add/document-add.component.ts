import { DocLib } from 'app/common/entity';
import { DocumentApiService } from './../../../common/api/document-api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.scss']
})
export class DocumentAddComponent implements OnInit {

  docLib: DocLib;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private message: NzMessageService,
    private documentApi: DocumentApiService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { docLib: DocLib }) => {
      this.docLib = data.docLib;
    });
  }

  onSave(event) {
    let value = event.value;
    value['docLib'] = { id: this.docLib.id };

    this.documentApi.create(value).subscribe(
      ok => {
        this.message.success('保存成功');
        this.toList();
      },
      err => {
        this.message.error('保存失败');
      }
    )
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
