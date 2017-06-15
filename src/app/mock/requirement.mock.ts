import * as Mock from 'mockjs';

import { BASE_URL } from './mock-config';

Mock.mock(new RegExp(`${BASE_URL}/requirements$`), {
    'data|5-15': [{
        'id|+1': 1,
        'name': '@ctitle()',
        'estimate': '@integer(0, 100)',
        'priority|1-5': 1,
        'status|1': ['draft', 'active', 'closed', 'changed'],
        'stage|1': ['wait', 'planned', 'projected', 'developing', 'testing', 'tested', 'verified', 'released'],
        'plan|1': [{id: 1, name: '初期研发'}, {id: 2, name: '中期研发'}],
    }]
});

Mock.mock(new RegExp(`${BASE_URL}/requirements/\\d$`), {
    'data': {
        'id': 1,
        'name': '@ctitle()',
        'estimate': '@integer(0, 100)',
        'priority|1-5': 1,
        'status|1': ['draft', 'active', 'closed', 'changed'],
        'stage|1': ['wait', 'planned', 'projected', 'developing', 'testing', 'tested', 'verified', 'released'],
        'plan|1': [{id: 1, name: '初期研发'}, {id: 2, name: '中期研发'}],
    }
});

Mock.mock(new RegExp(`${BASE_URL}/requirements/properties$`), () => {
    return {data: // [
        {
            // name: 'requirementSrouce',
            // values: [
            'requirementSource': [
                {key: 'customer', value: '客户'},
                {key: 'user', value: '用户'},
                {key: 'po', value: '产品经理'},
                {key: 'market', value: '市场'},
                {key: 'service', value: '客服'},
                {key: 'other', value: '其他'},
            ]
        // }
        ,
        // {
            // name: 'priority',
            // values: [
            'priority': [
                {key: 0, value: 0},
                {key: 1, value: 1},
                {key: 2, value: 2},
                {key: 3, value: 3},
                {key: 4, value: 4},
                {key: 5, value: 5},
            ]
        }
    // ]
    };
});
