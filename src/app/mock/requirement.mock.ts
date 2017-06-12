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
