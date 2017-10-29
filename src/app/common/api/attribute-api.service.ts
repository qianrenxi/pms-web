import { HttpAdaptor } from './../core/http/http-adaptor';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { browser } from 'protractor';

@Injectable()
export class AttributeApiService {
    attrs = {
        common: {
            priority: {
                id: 2,
                name: '优先级',
                code: 'priority',
                values: [
                    { id: 1, value: 1, label: '1', disabled: false },
                    { id: 1, value: 2, label: '2', disabled: false },
                    { id: 1, value: 3, label: '3', disabled: false },
                    { id: 1, value: 4, label: '4', disabled: false },
                    { id: 1, value: 5, label: '5', disabled: false },
                ]
            }
        },
        requirement: {
            source: {
                id: 1,
                name: '需求来源',
                code: 'source',
                values: [
                    { id: 1, value: 'customer', label: '客户', disabled: false },
                    { id: 1, value: 'user', label: '用户', disabled: false },
                    { id: 1, value: 'po', label: '产品经理', disabled: false },
                    { id: 1, value: 'market', label: '市场', disabled: false },
                    { id: 1, value: 'service', label: '客服', disabled: false },
                    { id: 1, value: 'other', label: '其他', disabled: false },
                ]
            }
        },

        task: {
            type: {
                id: 3,
                name: '任务类型',
                code: 'type',
                values: [
                    { id: 1, value: 'DESIGN', label: '设计', disabled: false },
                    { id: 1, value: 'DEVELOP', label: '开发', disabled: false },
                    { id: 1, value: 'TEST', label: '测试', disabled: false },
                    { id: 1, value: 'RESEARCH', label: '研究', disabled: false },
                    { id: 1, value: 'DISCUSS', label: '讨论', disabled: false },
                    { id: 1, value: 'INTERFACE', label: '界面', disabled: false },
                    { id: 1, value: 'BUSINESS', label: '事务', disabled: false },
                    { id: 1, value: 'OTHERS', label: '其他', disabled: false },
                ]
            },
            status: {
                id: 4,
                name: '任务状态',
                code: 'status',
                values: [
                    { id: 1, value: 'INITIAL', label: '未开始', disabled: false },
                    { id: 1, value: 'GOING', label: '进行中', disabled: false },
                    { id: 1, value: 'PAUSED', label: '已暂停', disabled: false },
                    { id: 1, value: 'CANCELED', label: '已取消', disabled: false },
                    { id: 1, value: 'COMPLETED', label: '已完成', disabled: false },
                    { id: 1, value: 'CLOSED', label: '已关闭', disabled: false },
                ]
            },
            closedReason: {
                id: 5,
                name: '关闭原因',
                code: 'closedReason',
                values: [
                    { id: 1, value: 'COMPLETED', label: '已完成', disabled: false },
                    { id: 1, value: 'GIVED_UP', label: '已放弃', disabled: false },
                    { id: 1, value: 'REPEATED', label: '重复', disabled: false },
                    { id: 1, value: 'NEXT_PLAN', label: '下次计划', disabled: false },
                ]
            }
        },
        testCase: {
            type: {
                id: 6,
                name: '用例类型',
                code: 'type',
                values: [
                    { id: 1, value: 'feature', label: '功能测试', disabled: false },
                    { id: 1, value: 'performance', label: '性能测试', disabled: false },
                    { id: 1, value: 'config', label: '配置相关', disabled: false },
                    { id: 1, value: 'install', label: '安装部署', disabled: false },
                    { id: 1, value: 'security', label: '安全相关', disabled: false },
                    { id: 1, value: 'interface', label: '接口测试', disabled: false },
                    { id: 1, value: 'other', label: '其他', disabled: false },
                ]
            },
            stage: {
                id: 6,
                name: '适用阶段',
                code: 'stage',
                values: [
                    { id: 1, value: 'unittest', label: '单元测试阶段', disabled: false },
                    { id: 1, value: 'feature', label: '功能测试阶段', disabled: false },
                    { id: 1, value: 'intergrate', label: '集成测试阶段', disabled: false },
                    { id: 1, value: 'system', label: '系统测试阶段', disabled: false },
                    { id: 1, value: 'smoke', label: '冒烟测试阶段', disabled: false },
                    { id: 1, value: 'bvt', label: '版本验证阶段', disabled: false },
                ]
            },
        },
        issue: {
            type: {
                id: 7,
                name: '问题类型',
                code: 'type',
                values: [
                    { id: 1, value: 'codeerror', label: '代码错误', disabled: false },
                    { id: 1, value: 'interface', label: '界面优化', disabled: false },
                    { id: 1, value: 'designdefect', label: '设计缺陷', disabled: false },
                    { id: 1, value: 'config', label: '配置相关', disabled: false },
                    { id: 1, value: 'install', label: '安装部署', disabled: false },
                    { id: 1, value: 'security', label: '安全相关', disabled: false },
                    { id: 1, value: 'performance', label: '性能问题', disabled: false },
                    { id: 1, value: 'standard', label: '标准规范', disabled: false },
                    { id: 1, value: 'automation', label: '测试脚本', disabled: false },
                    { id: 1, value: 'codeimprovement', label: '代码改进', disabled: false },
                    { id: 1, value: 'others', label: '其他', disabled: false },
                ]
            },
            system: {
                id: 8,
                name: '平台',
                code: 'system',
                values: [
                    { id: 1, value: 'all', label: '全部', disabled: false },
                    { id: 1, value: 'windows', label: 'Windows', disabled: false },
                    { id: 1, value: 'android', label: 'Android', disabled: false },
                    { id: 1, value: 'ios', label: 'IOS', disabled: false },
                    { id: 1, value: 'osx', label: 'OS X', disabled: false },
                    { id: 1, value: 'unix', label: 'Unix', disabled: false },
                    { id: 1, value: 'others', label: '其他', disabled: false },
                ]
            },
            browser: {
                id: 9,
                name: '浏览器',
                code: 'browser',
                values: [
                    { id: 1, value: 'all', label: '全部', disabled: false },
                    { id: 1, value: 'ie', label: 'IE系列', disabled: false },
                    { id: 1, value: 'ie11', label: 'ie11', disabled: false },
                    { id: 1, value: 'ie10', label: 'ie10', disabled: false },
                    { id: 1, value: 'chrome', label: 'chrome', disabled: false },
                    { id: 1, value: 'firefox', label: 'firefox系列', disabled: false },
                    { id: 1, value: 'others', label: '其他', disabled: false },
                ]
            },
            severity: {
                id: 10,
                name: '严重程度',
                code: 'severity',
                values: [
                    { id: 1, value: 1, label: '1', disabled: false },
                    { id: 1, value: 2, label: '2', disabled: false },
                    { id: 1, value: 3, label: '3', disabled: false },
                    { id: 1, value: 4, label: '4', disabled: false },
                    { id: 1, value: 5, label: '5', disabled: false },
                ]
            },
        },
        testTask: {
            status: {
                id: 9,
                name: '状态',
                code: 'status',
                values: [
                    { id: 1, value: 'WAIT', label: '未开始', disabled: false },
                    { id: 1, value: 'DOING', label: '进行中', disabled: false },
                    { id: 1, value: 'DONE', label: '已完成', disabled: false },
                    { id: 1, value: 'BLOCKED', label: '被阻塞', disabled: false },
                ]
            }
        },
        docLib: {
            type: {
                id: 10,
                name: '文档库类型',
                code: 'type',
                values: [
                    { id: 1, value: 'PRODUCT', label: '产品库', disabled: false },
                    { id: 1, value: 'PROJECT', label: '项目库', disabled: false },
                    { id: 1, value: 'CUSTOM', label: '自定义', disabled: false },
                ]
            },
            sourceType: {
                id: 11,
                name: '资源类型',
                code: 'sourceType',
                values: [
                    { id: 1, value: 'SIMPLE', label: '普通库', disabled: false },
                    { id: 1, value: 'FILE_SYSTEM', label: '文件系统', disabled: false },
                    { id: 1, value: 'SVN', label: 'SVN 库', disabled: false },
                    { id: 1, value: 'GIT', label: 'Git 库', disabled: false },
                ]
            }
        }
    };

    constructor(private httpAdaptor: HttpAdaptor) { }

    getAttribute(group: string, attrCode: string): Observable<any> {
        let attr = this.attrs[group] ? this.attrs[group][attrCode] : null;

        return Observable.of(attr);
    }
}
