import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { NzModalService } from 'ng-zorro-antd';
import { RequirementCloseDialogComponent } from './../../public/requirement-close-dialog/requirement-close-dialog.component';
import { Column } from 'consoleui';
import { Product } from 'app/common/entity/product';
import { Requirement } from './../../../common/entity/requirement';
import { Pagination } from './../../../common/core/entity/pagination';
import { ProductApiService } from './../../../common/api/product-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-requirement-list',
  templateUrl: './product-requirement-list.component.html',
  styleUrls: ['./product-requirement-list.component.scss']
})
export class ProductRequirementListComponent implements OnInit {

  product: Product;
  data: Pagination<Requirement>;
  selection: Requirement[];

  columns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '优先级', tpl: 'priority' },
    { title: '需求名称', tpl: 'name' },
    { title: '所属计划', data: 'planName' },
    { title: '创建者', data: 'createdByDisplayName' },
    { title: '指派给', data: 'assignToDisplayName' },
    { title: '预计(时)', data: 'estimate', defaultValue: '-', styleClass: 'text-center' },
    { title: '状态', tpl: 'status', styleClass: 'text-center' },
    { title: '阶段', tpl: 'stage', styleClass: 'text-center' },
    { title: '任务数', data: 'taskCount', defaultValue: 0, styleClass: 'text-center' },
    { title: '问题数', data: 'issueCount', defaultValue: 0, styleClass: 'text-center' },
    { title: '用例数', data: 'caseCount', defaultValue: 0, styleClass: 'text-center' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private productApi: ProductApiService, private requirementApi: RequirementApiService,
    private message: NzMessageService, private modal: NzModalService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { product: Product }) => {
      this.product = data.product;
      this.loadData();
    });
  }

  loadData() {
    this.productApi.requirements(this.product.id).subscribe(
      data => {
        this.data = data;
      }
    );
  }

  openClose(event, requirement) {
    const subscription = this.modal.open({
      title: requirement.name + ' > 关闭',
      content: RequirementCloseDialogComponent,
      onOk: () => {
        this.loadData();
      },
      onCancel() {
      },
      footer: false,
      width: '600',
      componentParams: {
        requirement: requirement
      }
    });
    subscription.subscribe(result => {
      // console.log(result);
    })
  }

  delete(reqId?: number) {
    if (!reqId && (!this.selection || this.selection.length == 0)) {
      this.message.warning('请选择要删除的需求');
      return;
    }

    let reqIds = reqId ? [reqId] : this.selection.map(it  => it.id);

    this.requirementApi.delete(reqIds).subscribe(
      ok => {
        this.message.success('删除成功');
        this.loadData();
      },
      err => {
      this.message.error('删除失败请重试');
      }
    );
  }

}
