import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-fixed-layout',
  templateUrl: './fixed-layout.component.html',
  styleUrls: ['./fixed-layout.component.scss']
})
export class FixedLayoutComponent implements OnInit {
  title = 'PMS';
  isSidebarFold = true;
  navItems = [
    {name: '我的工作台', route: 'dashboard', icon: 'dashboard', children: [
      // {name: '仪表盘', route: 'dashboard'},
      // {name: '待办', route: ''},
      // {name: '任务', route: ''},
      // {name: 'Bug', route: ''},
      // {name: '测试', route: ''},
      // {name: '需求', route: ''},
      // {name: '项目', route: ''},
      // {name: '动态', route: ''},
      // {name: '档案', route: ''},
      // {name: '联系人', route: ''},
      // {name: '日志', route: ''},
    ]},
    {name: '产品', route: 'product', icon: 'cubes', children: [
      // {name: '需求', route: 'demand'},
      // {name: '动态', route: ''},
      // {name: '计划', route: ''},
      // {name: '发布', route: ''},
      // {name: '路线图', route: ''},
      // {name: '文档', route: ''},
      // {name: '项目', route: ''},
      // {name: '平台', route: ''},
      // {name: '模块', route: ''},
      // {name: '概况', route: ''},
    ]},
    {name: '项目', route: 'project', icon: 'code', children: [
      // {name: '任务', route: ''},
      // {name: '需求', route: ''},
      // {name: 'Bug', route: ''},
      // {name: '版本', route: ''},
      // {name: '测试', route: ''},
      // {name: '日志', route: ''},
      // {name: '团队', route: ''},
      // {name: '动态', route: ''},
      // {name: '文档', route: ''},
      // {name: '产品', route: ''},
      // {name: '概况', route: ''},
    ]},
    {name: '测试', route: 'test', icon: 'bug', children: [
      // {name: 'Bug', route: ''},
      // {name: '用例', route: ''},
      // {name: '版本', route: ''},
      // {name: '套件', route: ''},
      // {name: '报告', route: ''},
      // {name: '用例库', route: ''},
    ]},
    {name: '文档', route: 'document', icon: 'file-text-o'},
    {name: '统计', route: 'report', icon: 'area-chart', children: [
      // {name: '产品', route: ''},
      // {name: '项目', route: ''},
      // {name: '测试', route: ''},
      // {name: '组织', route: ''},
      // {name: '自定义', route: ''},
    ]},
    {name: '组织', route: 'comp', icon: 'sitemap', children: [
      // {name: '用户', route: ''},
      // {name: '部门', route: ''},
      // {name: '待办', route: ''},
      // {name: '日志', route: ''},
      // {name: '权限', route: ''},
      // {name: '公司', route: ''},
      // {name: '动态', route: ''},
    ]},
    {name: '管理', route: 'admin', icon: 'cogs', children: [
      // {name: '首页', route: ''},
      // {name: '插件', route: ''},
      // {name: '短信配置', route: ''},
      // {name: '自定义', route: ''},
      // {name: '然之集成', route: ''},
      // {name: '回收站', route: ''},
    ]},
    {name: '反馈', route: 'feedback', icon: 'rss'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
