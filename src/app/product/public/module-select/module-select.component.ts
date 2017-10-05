import { ProductApiService } from 'app/common/api';
import { Module } from 'app/common/entity';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, forwardRef, Input, Output } from '@angular/core';


@Component({
  selector: 'pms-module-select',
  templateUrl: './module-select.component.html',
  styleUrls: ['./module-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ModuleSelectComponent),
      multi: true
    }
  ]
})
export class ModuleSelectComponent implements OnInit, ControlValueAccessor {

  _value: any;

  _modules: Module[];
  _modulesFlat: Module[];

  _selection: any[] = null;

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  @Input() productId: number;
  @Input() disabled: boolean;

  constructor(private productApi: ProductApiService) { }

  ngOnInit() {
    if (this.productId) {
      this.productApi.modulesFlat(this.productId).subscribe(
        mf => {
          this._modulesFlat = mf;
          this.parseTree();
          this.valueToSelection();
        }
      );
    }
  }

  writeValue(value: any): void {
    this._value = value;
    // this.valueToSelection();
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  parseTree(parent?: Module) {
    if (!parent) {
      let roots = this._modulesFlat.filter(it => !it.parentId);
      // this._modules = roots;

      for (let r of roots) {
        r.path = [r];
        this.parseTree(r);
      }

      this._modules = roots;
      return roots;
    }

    let children = this._modulesFlat.filter(it => it.parentId == parent.id);
    parent.children = children;
    parent.childCount = children.length;

    if (parent.childCount == 0) {
      parent.isLeaf = true;
    }

    for (let c of parent.children) {
      c.path = [...parent.path, c];
      this.parseTree(c);
    }
  }

  valueToSelection() {
    if (this._value && this._modulesFlat) {
      this._selection = this._modulesFlat.find(it => it.id == this._value).path.map(it => it.id);
    } else {
      this._selection = [];
    }
    // console.log('v2s', this._selection)
  }

  selectionToValue() {
    if (this._selection && this._selection.length > 0) {
      this._value = this._selection[this._selection.length - 1];
    } else {
      this._value = undefined;
    }
  }

  selectionChange(sel) {
    // this._selection = sel;
    // console.log('sc', sel)
    this.selectionToValue();
    this.onChange(this._value);
  }
}
