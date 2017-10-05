import { Module } from './../../../common/entity/module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import { CuiTreeConfig, CuiTreeNode } from 'consoleui';
import { ModuleApiService } from 'app/common/api/module-api.service';
import { Product } from 'app/common/entity/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-module',
  templateUrl: './product-module.component.html',
  styleUrls: ['./product-module.component.scss']
})
export class ProductModuleComponent implements OnInit {

  product: Product;

  treeConfig: CuiTreeConfig;

  formVisable = false;
  editingModule: Module = null;
  moduleForm: FormGroup = null;

  constructor(private router: Router, private route: ActivatedRoute,
    private moduleApi: ModuleApiService, private message: NzMessageService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe((data: {product: Product}) => {
      this.product = data.product;
      this.initTreeConfig();
    });
  }

  initTreeConfig() {
    this.treeConfig = {
      async: {
        enable: true,
        loadChildren: (node: CuiTreeNode): Observable<any> => {
          return this.loadData(node.data.id).catch((err) => {
            this.message.error('模块加载失败');
            return Observable.of(null);
          });
        }
      },
      data: {
        key: {
          id: 'id',
          label: 'name',
          children: 'children'
        }
      }
    };
  }

  loadData(parentId) {
    let params = {
      'product.id': this.product.id,
      'parent.id': parentId || ''
    };
    return this.moduleApi.getAll(params);
  }

  initForm() {
    let entity: Module = this.editingModule || new Module();
    this.moduleForm = this.fb.group({
      name: [entity.name, Validators.required],
    });
  }

  openAdd() {
    this.formVisable = true;
    this.editingModule = new Module();
    this.initForm();
  }

  handleCancel() {
    this.formVisable = false;
    this.editingModule = null;
  }

  handleOk() {
    this.formVisable = false;

    if (this.moduleForm.valid) {
      let data = this.moduleForm.value;
      data['parent'] = null;
      data['product'] = this.product;

      if (this.editingModule.id) {
        data['id'] = this.editingModule.id;
        this.doUpdate(data);
      } else {
        this.doCreate(data);
      }
    }
  }

  doCreate(data) {
    this.moduleApi.create(data).subscribe(
      ok => {
        this.message.success('添加模块成功');
        this.formVisable = false;
        this.editingModule = null;
      },
      err => {
        this.message.error('添加模块失败');
      }
    );
  }

  doUpdate(data) {
    this.moduleApi.update(data).subscribe(
      ok => {
        this.message.success('修改模块成功');
        this.formVisable = false;
        this.editingModule = null;
      },
      err => {
        this.message.error('修改模块失败');
      }
    );
  }
}
