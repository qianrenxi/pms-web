import { DocOperateDialogService } from './../doc-operate-dialog/doc-operate-dialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-document-toolbar',
  templateUrl: './document-toolbar.component.html',
  styleUrls: ['./document-toolbar.component.scss']
})
export class DocumentToolbarComponent implements OnInit {

  _navs;

  constructor(private docOperate: DocOperateDialogService) { }

  ngOnInit() {
    this._navs = [
      // { title: '首页', routerLink: ['my', 'requirement'] },
    ];
  }

  openDocLibAdd() {
    
  }
}
