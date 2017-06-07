import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CuiPagination } from './defs/api';
import { PaginationModel } from './pagination.model';

@Component({
  selector: 'cui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pagination: CuiPagination;
  @Output('paginationChange') paginationChange = new EventEmitter();
  @Output('goto') goto = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.pagination = new PaginationModel(0, 0, 0);
  }

  prev() {
    if (this.pagination.hasPrefix()) {
      this.pagination.page -= 1;
    }
    this.paginationChange.emit(this.pagination);
    this.gotoPage();
  }

  next() {
    if (this.pagination.hasNext()) {
      this.pagination.page += 1;
    }
    this.paginationChange.emit(this.pagination);
    this.gotoPage();
  }

  gotoPage() {
    this.goto.emit(this.pagination.page);
  }
}
