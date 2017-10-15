import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-document-toolbar',
  templateUrl: './document-toolbar.component.html',
  styleUrls: ['./document-toolbar.component.scss']
})
export class DocumentToolbarComponent implements OnInit {

  _navs;

  constructor() { }

  ngOnInit() {
    this._navs = [
      // { title: '首页', routerLink: ['my', 'requirement'] },
    ];
  }
}
