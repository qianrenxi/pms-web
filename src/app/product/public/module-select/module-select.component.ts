import { Component, OnInit, Input } from '@angular/core';
import { CuiTreeConfig, CuiTreeNode, CuiLayer } from 'consoleui';
import { Module } from '../../../entity/module';
import { ModuleService } from '../../../service/module.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../entity/product';

@Component({
  selector: 'pms-module-select',
  templateUrl: './module-select.component.html',
  styleUrls: ['./module-select.component.scss']
})
export class ModuleSelectComponent implements OnInit {
  @Input() product: Product;

  treeConfig: CuiTreeConfig;

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

    this.treeConfig = treeConfig;
  }

  loadModules(parent?: Module) {
    return this.moduleService.getAll({'product.id': this.product.id, 'parent.id': parent ? parent.id : '' });
  }
}
