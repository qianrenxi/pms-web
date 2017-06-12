import * as Mock from 'mockjs';

import { BASE_URL } from './mock-config';

Mock.mock(new RegExp(`${BASE_URL}/products/\\d/plans$`), {
    'data|5-15': [{
        'id|+1': 1,
        'name': '@ctitle()',
        'description': '@cparagraph()',
        'startDate': '@date()',
        'endDate': '@date()',
        'product': {'id': 1, 'name': '@ctitle()'}
    }]
});

Mock.mock(new RegExp(`${BASE_URL}/products/\\d/plans/\\d$`), {
    'data': {
        'id': 1,
        'name': '@ctitle()',
        'description': '@cparagraph()',
        'startDate': '@date()',
        'endDate': '@date()',
        'product': {'id': 1, 'name': '@ctitle()'}
    }
});
