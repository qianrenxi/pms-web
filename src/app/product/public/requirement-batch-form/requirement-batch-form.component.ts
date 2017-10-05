import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pms-requirement-batch-form',
  templateUrl: './requirement-batch-form.component.html',
  styleUrls: ['./requirement-batch-form.component.scss']
})
export class RequirementBatchFormComponent implements OnInit {

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  batchForms: FormGroup[] = [];

  _COLUMNS = [
    { key: 'module', title: '所属模块', span: 2, disabled: false},
    { key: 'plan', title: '所属计划', span: 2, disabled: false},
    { key: 'name', title: '需求名称', span: 5, disabled: false},
    { key: 'source', title: '需求来源', span: 2, disabled: true},
    { key: 'description', title: '需求描述', span: 4, disabled: false},
    { key: 'acceptance', title: '验收标准', span: 2, disabled: true},
    { key: 'priority', title: '优先级', span: 1, disabled: false},
    { key: 'estimate', title: '预计工时', span: 1, disabled: false},
    { key: 'needReview', title: '评审', span: 1, disabled: false},
    { key: 'keywords', title: '关键词', span: 2, disabled: true},
  ];

  // _disabledColSpan = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      this.batchForms.push(this.createForm());
    }

    this.setColumns();
  }

  createForm() {
    let formGroup = this.fb.group({
      module: [],
      plan: [],
      name: [null, Validators.required],
      source: [],
      description: [],
      acceptance: [],
      priority: [],
      estimate: [],
      needReview: [],
      keywords: [],
    });

    return formGroup;
  }

  setColumns() {
    let disabledColSpan = 0;
    this._COLUMNS.filter(it => it.disabled).forEach( item => {
      disabledColSpan += item.span;
    });

    this.getColumn('name').span += disabledColSpan;
  }

  getColumn(key) {
    return this._COLUMNS.find(it => it.key == key);
  }

  _save(event) {
    let values = [];
    this.batchForms.filter(it => it.valid).forEach(it => values.push(it));

    if (values && values.length > 0) {
      this.save.emit({ofiginalEvent: event, value: values});
    }
  }

  _cancel(event) {
    this.cancel.emit({originalEvent: event});
  }

}
