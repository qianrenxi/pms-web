import * as Mock from 'mockjs';

import { BASE_URL } from './mock-config';

Mock.mock(new RegExp(`${BASE_URL}/products/\\d/modules$`), {
    'data|1-10': [{
        'id|+1': 1,
        'name': '@ctitle()',
        'children|0-2': [{
            'id|+10': 1000,
            'name': '@ctitle()'
        }]
    }]
});
