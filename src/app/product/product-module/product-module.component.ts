import { Component, OnInit, ViewChild } from '@angular/core';

import { TreeComponent, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'pms-product-module',
  templateUrl: './product-module.component.html',
  styleUrls: ['./product-module.component.scss']
})
export class ProductModuleComponent implements OnInit {
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];

  @ViewChild(TreeComponent)
  private moduleTree: TreeComponent;

  private editingNode;

  constructor() { }

  ngOnInit() {
  }

  add(node: TreeNode) {
    let parent;
    let siblings;
    if (!node) {
      console.log('添加顶级模块');
      siblings = this.nodes;
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
