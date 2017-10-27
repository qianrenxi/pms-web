import { Column } from 'consoleui';
import { Pagination } from 'app/common/core';
import { DocumentApiService } from 'app/common/api';
import { DocLib } from 'app/common/entity';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  docLib: DocLib;

  data: Pagination<DocLib>;
  selection: DocLib[];
  loading: boolean;

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '标题', tpl: 'name' },
    { title: '格式', data: 'format' },
    { title: '创建人', data: 'createdByDisplayName' },
    { title: '创建时间', tpl: 'createdDate' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentApi: DocumentApiService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { docLib: DocLib }) => {
      this.docLib = data.docLib;

      this.loadData();
    });
  }

  loadData() {
    let params = { 'docLib.id': this.docLib.id };

    this.documentApi.getAllOfPage(params).subscribe(
      data => {
        this.data = data
      }
    );
  }

}
