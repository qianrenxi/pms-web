import { Issue, Requirement } from 'app/common/entity';
import { Pagination } from 'app/common/core';
import { Column } from 'consoleui';
import { PlanApiService } from 'app/common/api';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'app/common/entity/product';
import { Component, OnInit } from '@angular/core';
import { Plan } from 'app/common/entity';

@Component({
  selector: 'pms-product-plan-view',
  templateUrl: './product-plan-view.component.html',
  styleUrls: ['./product-plan-view.component.scss']
})
export class ProductPlanViewComponent implements OnInit {

  product: Product;
  plan: Plan;

  requirements: Pagination<Requirement>;
  requirementColumns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '优先级', data: 'priority' },
    { title: '需求名称', data: 'name' },
    { title: '创建者', data: 'createdByDisplayName' },
    { title: '指派给', data: 'assignToDisplayName' },
    { title: '预计工时', data: 'estimate' },
    { title: '状态', data: 'status' },
    { title: '阶段', data: 'stage' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  issues: Pagination<Issue>;
  issueColumns: Column[] = [
    { title: 'ID', data: 'id' },
    { title: '优先级', data: 'priority' },
    { title: '问题名称', data: 'name' },
    { title: '创建者', data: 'createdByDisplayName' },
    { title: '指派给', data: 'assignToDisplayName' },
    { title: '状态', data: 'status' },
    { title: '操作', tpl: 'actions', styleClass: 'text-right' },
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private planApi: PlanApiService, private message: NzMessageService,
    private modal: NzModalService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { product: Product, plan: Plan }) => {
      this.product = data.product;
      this.plan = data.plan;

      this.loadRequirements();
      this.loadIssues();
    });
  }

  loadRequirements() {
    this.requirements = new Pagination<Requirement>();
    this.requirements.content = [];
  }

  loadIssues() {
    this.issues = new Pagination<Issue>();
    this.issues.content = [];
  }

  delete() {
    this.modal.confirm({
      title  : '您是否确认要删除这条计划',
      content: '计划删除后关联的任务、问题和测试不会级联删除，需要手动整理。',
      onOk() {
        this.doDelete();
      },
      onCancel() {
      }
    });
  }

  doDelete() {
    let planId = this.plan.id;
    this.planApi.delete([planId]).subscribe(
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
