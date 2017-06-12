import * as Mock from 'mockjs';

import { BASE_URL } from './mock-config';

Mock.mock(new RegExp(`${BASE_URL}/activities$`), {
    'data|2-7': [{
        'date': '@date()',
        'activities|5-25': [{
            'id|+100': 1,
            'time': '@datetime()',
            'operation|1': ['create', 'modify', 'delete', 'update', 'close', 'resovle', 'link'],
            'user': {'id': 1, 'displayName': '@cname'},
            'object': {'id': 1, 'name': '@ctitle',
                'type|1': ['requirement', 'plan', 'project', 'bmod', 'bug', 'issue', 'document', 'case']},
            'comment|1-5': '@csentence'
        }]
    }]
});
