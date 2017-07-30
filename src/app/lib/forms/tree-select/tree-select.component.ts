import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TreeNode } from '../../data/tree/model/tree-node';
import { CuiTreeConfig } from '../../data/tree';

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TreeSelectComponent),
  multi: true
};

@Component({
  selector: 'cui-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss'],
  providers: [SELECT_VALUE_ACCESSOR]
})
export class TreeSelectComponent implements OnInit, ControlValueAccessor {

  defaultOptions;
  open = false;

  @Input() name: string;
  @Input() selected: any;
  // @Input() data: any[];
  @Input() config: CuiTreeConfig;

  @Output() change = new EventEmitter();

  value: any;
  onModelChange: Function = () => { };
  onModelTouched: Function = () => { };

  constructor(
    private cd: ChangeDetectorRef
  ) {
    this.defaultOptions = {};
  }

  ngOnInit() {
    this.config = Object.assign({}, this.defaultOptions, this.config);
  }

  writeValue(value: any) {
    // reset fileter

    this.value = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  show() {
    this.open = true;
  }

  onSelectionChange(nodes: TreeNode[]) {
    console.log('Tree-Select Component slected nodes: ', nodes);
    if (!nodes) {
      return;
    }

    this.value = nodes[0].data;
    this.onModelChange(this.value);

    this.change.emit(this.value);
  }
}
