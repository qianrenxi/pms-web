import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TreeComponent, TreeNode } from 'angular-tree-component';

import { Bmod } from '../../entity/bmod';
import { BmodService } from '../../service/bmod.service';

@Component({
  selector: 'pms-product-module-tree',
  templateUrl: './module-tree.component.html',
  styleUrls: ['./module-tree.component.scss']
})
export class ModuleTreeComponent implements OnInit {
  // modules: Bmod[];
  modules;

  @ViewChild(TreeComponent)
  private moduleTree: TreeComponent;

  @ViewChild('cofim')
  private confirm: TemplateRef<any>;

  private editingNode;

  constructor(private bmodService: BmodService) { }

  ngOnInit() {
    this.bmodService.getModules()
      .subscribe(
        modules => {this.modules = modules; console.log(this.modules)}
      );
  }

  add(node: TreeNode) {
    let parent;
    let siblings;
    if (!node) {
      console.log('添加顶级模块');
      siblings = this.modules;
    } else {
      console.log(`给${node.data.name}添加子级模块`);
      parent = node.data;
      if (!parent.children) {
        parent.children = [];
      }
      siblings = parent.children;
    }

    this.clearEditing();
    this.editingNode = {id: null, name: '', editing: true, parent: parent};
    siblings.push(this.editingNode);
    this.moduleTree.treeModel.update();
  }

  edit(node) {
    console.log(node);
    if (!node) {
      return;
    }
    node.data.editing = true;
    this.clearEditing();
    this.editingNode = node.data;
  }

  delete(e) {
    console.log(e);
  }

  catchEnter(event) {
    let code = event.keyCode;
    if (code === 13) {
      this.clearEditing();
      event.returnValue = false;
    }
  }

  private clearEditing() {
    if (!this.editingNode) {
      return;
    }

    const en = this.editingNode;
    // save or remove
    en.editing = false;
    this.editingNode = null;
  }
}
