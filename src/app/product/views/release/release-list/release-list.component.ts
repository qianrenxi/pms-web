import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.scss']
})
export class ReleaseListComponent implements OnInit {
  arrs = new Array(10);
  constructor() { }

  ngOnInit() {
  }

}
