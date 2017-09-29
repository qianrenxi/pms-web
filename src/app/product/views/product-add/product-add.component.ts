import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../../common/entity/product';
import { DynamicFormBuilder, BaseField } from 'app/common/shared/dynamic-form';
import { UserApiService } from '../../../common/api/user-api.service';
import { Router } from '@angular/router';
import { NzMessageService } from "ng-zorro-antd";
import { ProductApiService } from '../../../common/api/product-api.service';

@Component({
  selector: 'pms-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  err;
  productForm: FormGroup;

  fields: BaseField<any>[];

  _types = [
    { value: 'NORMAL', label: '普通', disabled: false},
    { value: 'MULTI_BRANCH', label: '多分支', disabled: false},
    { value: 'MULTI_PLATFORM', label: '多平台', disabled: false},
  ];

  _accessControls = [
    {value: 'PUBLIC', label: '默认设置(有产品视图权限，即可访问)', disabled: false},
    {value: 'PRIVATE', label: '私有产品(只有产品相关负责人和项目团队成员才能访问)', disabled: false},
    {value: 'CUSTOM', label: '自定义白名单(团队成员和白名单的成员可以访问)', disabled: true},
  ];

  _LEADERS = [];

  constructor(private fb: FormBuilder, private dfb: DynamicFormBuilder,
    private message: NzMessageService, private productApi: ProductApiService,
    private userApi: UserApiService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let entity: Product = new Product();
    this.productForm = this.fb.group({
      name: [entity.name, Validators.required],
      code: [entity.code, Validators.required],
      'productLeader.id': [null],
      'testLeader.id': [null],
      'publishLeader.id': [null],
      type: [entity.type || 'NORMAL'],
      description: [entity.description],
      accessControl: [entity.accessControl || 'PUBLIC']
    });
  }

  getFormControl(name) {
    return this.productForm.controls[name];
  }

  _leaderSearchChange(searchText) {
    let params = {username: searchText};
    this.userApi.getAllOfPage(params).subscribe(
      users => this._LEADERS = users.content.map(user => ({label: user.displayName, value: user.id, disabled: false}))
    );
  }

  save() {
    for (let c of Object.keys(this.productForm.controls)) {
      this.productForm.controls[c].markAsDirty();
    }

    if (!this.productForm.valid) {
      this.message.warning('请更正表单信息');
      return;
    }

    let data = this.productForm.value;
    this.productApi.create(data).subscribe(
      ok => {
        this.message.success('添加产品成功');
        this.router.navigateByUrl('/product/list');
      },
      err => this.err = err
    );
  }

  cancel() {
    this.router.navigateByUrl('/product/list');
    // go back
  }
}
