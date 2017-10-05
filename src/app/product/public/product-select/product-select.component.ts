import { Product } from 'app/common/entity/product';
import { ProductApiService } from './../../../common/api/product-api.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, forwardRef, Input } from '@angular/core';

@Component({
  selector: 'pms-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductSelectComponent),
      multi: true
    }
  ]
})
export class ProductSelectComponent implements OnInit, ControlValueAccessor {

  @Input() disabled;

  _value: number;

  _products: Product[];
  productsStage: Product[];

  // ngModel access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(private productApi: ProductApiService) { }

  ngOnInit() {
    this.loadProducts();
  }

  writeValue(value: any): void {
    this._value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  loadProducts() {
    this.productApi.getAllOfPage().subscribe(
      prods => {
        this._products = prods.content;
        this.productsStage = prods.content;
      }
    );
  }

  searchChange(value) {
    if (this.productsStage) {
      this._products = this.productsStage.filter(it => it.name.includes(value));
    }
  }
}
