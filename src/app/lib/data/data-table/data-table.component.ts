import { Component, OnInit, Input, Output, EventEmitter,
  Directive,
  ContentChild, ContentChildren, TemplateRef, AfterContentInit,
  QueryList } from '@angular/core';

import { CuiPagination } from '../pagination';

import { Column } from './defs/api';
import { ColTplDirective } from './col-tpl.directive';

@Component({
  selector: 'cui-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterContentInit {
  @Input() columns: Column[];
  @Input() data: any[];
  @Input() pagination: CuiPagination;
  @Input() selectType?: string;
  @Input() rowActionTitle?: string;
  @Input() loading?: boolean;
  @Input() isComplexSearch?: boolean;
  @Input() dynamicColumns?: boolean;
  // input, Output searchForm
  @Output() reload = new EventEmitter();
  @Output() select = new EventEmitter();
  isSelectAll: Boolean = false;
  ids = [];

  @ContentChild('rowActions') rowActions: TemplateRef<any>;
  @ContentChildren(ColTplDirective) _colTpls: QueryList<ColTplDirective>;

  @ContentChild('complexSearch') complexSearch: TemplateRef<any>;
  @ContentChild('simpleSearch') simpleSearch: TemplateRef<any>;
  @ContentChild('listTools') listTools: TemplateRef<any>;
  @ContentChild('actionGroup') actionGroup: TemplateRef<any>;

  columnsVisible: Column[];

  colTpls = {};

  constructor() { }

  ngOnInit() {
    this.columnsVisible = this.columns.filter(it => it.visible !== false);
  }

  ngAfterContentInit() {
    // console.log(this.rowActions);
    // console.log(this._colTpls);

    this._colTpls.forEach(it => {
      this.colTpls[it.cuiColTpl] = it.templateRef;
    });
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

  toggleComplexSearch() {
    this.isComplexSearch = !this.isComplexSearch;
  }

}
