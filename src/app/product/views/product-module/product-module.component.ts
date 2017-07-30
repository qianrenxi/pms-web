import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { TreeComponent, TreeNode } from 'angular-tree-component';
import { Product } from '../../../entity/product';
import { ProductService } from '../../../service/product.service';
import { CuiLayer, CuiTreeNode } from 'consoleui';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from '../../../entity/module';
import { ModuleService } from '../../../service/module.service';
import { CuiLayerRef } from '../../../lib/layer/layer-ref';
import { CuiTreeConfig } from '../../../lib/data/tree/defs/defs';

@Component({
  selector: 'pms-product-module',
  templateUrl: './product-module.component.html',
  styleUrls: ['./product-module.component.scss']
})
export class ProductModuleComponent implements OnInit {

  product: Product;
  modules: Module[];
  editingModule: Module;
  layerRef: CuiLayerRef<any>;
  formErr;

  treeConfig: CuiTreeConfig;
  selection: Module;

  @ViewChild('moduleForm') moduleForm: TemplateRef<any>;

  constructor(private moduleService: ModuleService, private layer: CuiLayer,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let treeConfig: CuiTreeConfig = {
      data: {
        key: {
          id: 'id',
          label: 'name',
          children: 'children',
        }
      },
      async: {
        enable: true,
        loadChildren: (node: CuiTreeNode) => {
          return this.loadModules(node.data);
        },
        dataFilter: (children: Module[]) => {
          return children.map(it => {
            if (it.childCount > 0) {
              it['hasChildren'] = true;
            }
            return it;
          });
        }
      }
    };

    this.route.data.subscribe((data: { product: Product }) => {
      this.product = data.product;
      // this.loadModules();
      this.treeConfig = treeConfig;
    });
  }

  loadModules(parent?: Module) {
    return this.moduleService.getAll({'product.id': this.product.id, 'parent.id': parent ? parent.id : '' });
  }

  openForm() {
    this.layerRef = this.layer.open(this.moduleForm, {shadeClose: false});
  }

  createRoot() {
    this.editingModule = new Module();
    this.editingModule.product = this.product;
    this.openForm();
  }

  createChild() {
    if (!this.selection) {
      this.layer.alert('请选择一个父节点');
      return;
    }
    this.editingModule = new Module();
    this.editingModule.product = this.product;
    this.editingModule.parent = this.selection;
    this.openForm();
  }

  edit() {
    if (!this.selection) {
      this.layer.alert('请选择一个节点');
      return;
    }
    this.editingModule  = this.selection;
    this.openForm();
  }

  delete() {
    if (!this.selection) {
      this.layer.alert('请选择一个节点');
      return;
    }
    this.layer.confirm('确定要删除选中的节点吗？', () => {
      this.moduleService.delete([this.selection.id]).subscribe(
        ok => {
          this.layer.msg('删除成功');
          this.loadModules();
        },
        err => {
          this.layer.msg('删除失败');
        }
      );
    });
  }

  onSelectChange(sel) {
    if (sel) {
      this.selection = sel[0].data;
    }
  }

  doSave() {
    // console.log(this.editingModule);
    this.moduleService.save(this.editingModule).subscribe(
      m => {
        this.editingModule = null;
        this.loadModules();
        this.layerRef.close();
      },
      err => {
        this.formErr = err;
      }
    );
  }
}
