import { HttpAdaptor } from './../core/http/http-adaptor';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
        }
    };

    constructor(private httpAdaptor: HttpAdaptor) { }

    getAttribute(group: string, attrCode: string): Observable<any> {
        let attr = this.attrs[group] ? this.attrs[group][attrCode] : null;

        return Observable.of(attr);
    }
}
