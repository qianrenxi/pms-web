import { RequirementSpec } from './../../../common/entity/requirement-spec';
import { NzMessageService } from 'ng-zorro-antd';
import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { RequirementCloseDialogComponent } from './../../public/requirement-close-dialog/requirement-close-dialog.component';
import { RequirementSubdivideDialogComponent } from './../../public/requirement-subdivide-dialog/requirement-subdivide-dialog.component';
import { Requirement } from './../../../common/entity/requirement';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'pms-product-requirement-view',
  templateUrl: './product-requirement-view.component.html',
  styleUrls: ['./product-requirement-view.component.scss']
})
export class ProductRequirementViewComponent implements OnInit {

  requirement: Requirement;
  near: {prev?: Requirement, next?: Requirement};

  remark;
  _showRemark;

  _versions = [];
  _currVersion = 1;
  _currSpec;

  constructor(private router: Router, private route: ActivatedRoute,
    private modal: NzModalService, private requirementApi: RequirementApiService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {requirement: Requirement}) => {
      this.requirement = data.requirement;

      this.initVersions();
      this.loadSpec(this._currVersion);
      this.loadNear();
    });
  }

  loadSpec(version) {
    if (version == this.requirement.version) {
      let spec = new RequirementSpec();
      spec.requirementId = this.requirement.id;
      spec.name = this.requirement.name;
      spec.description = this.requirement.description;
      spec.acceptance = this.requirement.acceptance;
      spec.version = version;
      this._currSpec = spec;
      return;
    }

    this.requirementApi.getSpec(this.requirement.id, version).subscribe(
      spec => {
        this._currSpec = spec;
      }
    );
  }

  initVersions() {
    let maxVer = this.requirement.version || 1;
    this._currVersion = maxVer;

    for (let v = maxVer; v > 0; v--) {
      this._versions.push(v);
    }
  }

  loadNear() {
    let reqId = this.requirement ? this.requirement.id : 0;
    this.requirementApi.getNear(reqId).subscribe(
      near => this.near = near
    );
  }

  openSubdivide(event) {
    const subscription = this.modal.open({
      title          : this.requirement.name + ' > 需求细分',
      content        : RequirementSubdivideDialogComponent,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer         : false,
      width: '90%',
      componentParams: {
        name: '测试渲染Component'
      }
    });
    subscription.subscribe(result => {
      console.log(result);
    })
  }

  openClose(event) {
    const subscription = this.modal.open({
      title          : this.requirement.name + ' > 关闭',
      content        : RequirementCloseDialogComponent,
      onOk: () => {
        this.toList();
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer         : false,
      width: '600',
      componentParams: {
        requirement: this.requirement
      }
    });
    subscription.subscribe(result => {
      // console.log(result);
    })
  }

  showRemark() {
    this._showRemark = true;
  }

  hideRemark() {
    this._showRemark = false;
  }

  toggleRemark() {
    this._showRemark = !this._showRemark;
  }

  saveRemark() {
    if (this.remark) {
      this.requirementApi.remark(this.requirement.id, {remark: this.remark}).subscribe(
        ok => {
          this.message.success('添加备注成功');
          this.remark = null;
        },
        err => {
          this.message.error('添加备注失败');
        }
      );
    }
  }

  delete() {
    this.modal.confirm({
      title  : '您是否确认要删除这条需求',
      content: '需求删除后关联的任务、问题和测试不会级联删除，需要手动清理。',
      onOk: () => {
        this.doDelete();
      },
      onCancel() {
      }
    });
  }

  prev() {
    if (this.near.prev) {
      this.router.navigate(['../../', this.near.prev.id, 'view'], {relativeTo: this.route});
    }
  }

  next() {
    if (this.near.next) {
      this.router.navigate(['../../', this.near.next.id, 'view'], {relativeTo: this.route});
    }
  }

  doDelete() {
    let reqId = this.requirement.id;
    this.requirementApi.delete([reqId]).subscribe(
      ok => {
        this.message.success('删除成功');
        this.toList();
      },
      err => {
        this.message.error('删除失败，请重试');
      }
    );
  }

  toList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
