import { DocOperateDialogService } from './../../public/doc-operate-dialog/doc-operate-dialog.service';
import { DocLib } from './../../../common/entity/doc-lib';
import { DocLibApiService } from 'app/common/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss']
})
export class DocHomeComponent implements OnInit {

  libs: DocLib[];
  hasLibs: boolean = true;

  productLibs: {productId: number, productName: string, libs: DocLib[]}[] = [];
  projectLibs: {projectId: number, projectName: string, libs: DocLib[]}[] = [];
  customLibs: DocLib[];

  constructor(private docLibApi: DocLibApiService,
    private docOperate: DocOperateDialogService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.docLibApi.getAll().subscribe(
      libs => {
        this.libs = libs;
        this.mapLibs();
      }
    );
  }

  mapLibs() {
    if (!this.libs || this.libs.length == 0) {
      this.hasLibs = false;
      return;
    }

    this.customLibs = this.libs.filter(it => !it.productId && !it.projectId);

    let prodLibs = this.libs.filter(it => !!it.productId);
    prodLibs.map(lib => {
      let libo = this.productLibs.find(it => it.productId == lib.productId);
      if (libo) {
        libo.libs = libo.libs ? [...libo.libs, lib] : [lib];
      } else {
        libo = {productId: lib.productId, productName: lib.productName, libs: [lib]};
        this.productLibs = this.productLibs ? [...this.productLibs, libo] : [libo];
      }
    });

    let projLibs = this.libs.filter(it => !!it.projectId);
    projLibs.map(lib => {
      let libo = this.projectLibs.find(it => it.projectId == lib.projectId);
      if (libo) {
        libo.libs = libo.libs ? [...libo.libs, lib] : [lib];
      } else {
        libo = {projectId: lib.projectId, projectName: lib.projectName, libs: [lib]};
        this.projectLibs = this.projectLibs ? [...this.projectLibs, libo] : [libo];
      }
    });
  }
}
