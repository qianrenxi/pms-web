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
                    { id: 1, value: '1', label: '1', disabled: false },
                    { id: 1, value: '2', label: '2', disabled: false },
                    { id: 1, value: '3', label: '3', disabled: false },
                    { id: 1, value: '4', label: '4', disabled: false },
                    { id: 1, value: '5', label: '5', disabled: false },
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
        }
    };

    constructor(private httpAdaptor: HttpAdaptor) { }

    getAttribute(group: string, attrCode: string): Observable<any> {
        let attr = this.attrs[group] ? this.attrs[group][attrCode] : null;

        return Observable.of(attr);
    }
}
