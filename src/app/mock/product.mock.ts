import * as Mock from 'mockjs';

import { BASE_URL } from './mock-config';

Mock.mock(`${BASE_URL}/products`, {
    'products|15': [{
        'id|+1': 1,
        'name': '@ctitle(6, 20)',
        'code': '@title(6, 20)'
    }]
});
