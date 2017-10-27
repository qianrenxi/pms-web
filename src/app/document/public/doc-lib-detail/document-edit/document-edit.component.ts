import { DocumentApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Document, DocLib } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.scss']
})
export class DocumentEditComponent implements OnInit {

  docLib: DocLib;
  document: Document;

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

  onSave(event) {
    let value = event.value;
    value['id'] = this.document.id;
    value['docLib'] = { id: this.docLib.id };

    this.documentApi.update(value).subscribe(
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
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
