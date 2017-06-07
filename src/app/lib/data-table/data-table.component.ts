import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';

import { CuiPagination } from '../pagination';

import { Column } from './defs/api';

@Component({
  selector: 'cui-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() columns: Column[];
  @Input() data: any[];
  @Input() pagination: CuiPagination;
  @Input() selectType?: string;
  // input, Output searchForm
  @Output() reload = new EventEmitter();
  @Output() select = new EventEmitter();
  isSelectAll: Boolean = false;
  ids = [];

  @ContentChild('rowActions') rowActions: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  fireReload() {
    this.reload.emit(this.pagination);
  }

  selectAll() {
    this.isSelectAll = !this.isSelectAll;
    if (!this.isSelectAll) {
      this.ids = [];
    } else {
      this.ids = [];
      this.data.forEach((row, index, arr) => {
        this.ids.push(row.id);
      });
    }

    this.select.emit(this.ids);
  }

  selectItem(id, checked) {
    let ids = [];
    this.ids.forEach((val) => {
      if (val != id) {
        let d = this.data.filter((x) => {
          return x['id'] == val;
        });
        if (d.length > 0) {
          ids.push(val);
        }
      }
    });
    if (checked) {
      ids.push(id);
    }
    this.ids = ids;

    this.select.emit(this.ids);
  }

}
