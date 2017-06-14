
import * as Mock from 'mockjs';

import { BASE_URL } from './mock-config';


Mock.mock(`${BASE_URL}/tasks`, {
    'data|15': [{
        'id|+1': 1,
        'name': '@ctitle(6, 20)',
        'status|1': ['未开始', '进行中', '已完成', '已取消', '已关闭'],
        'createdBy': {'id': 1, 'name': '@cname', 'displayName': '@cname'},
        'createdDate': '@date',
        'assignedTo': {'id': 1, 'name': '@cname', 'displayName': '@cname'},
    }]
});


Mock.mock(new RegExp(`${BASE_URL}/tasks/\\d$`), {
    'data': {
        'id': 1,
        'name': '@ctitle(6, 20)',
        'status|1': ['未开始', '进行中', '已完成', '已取消', '已关闭'],
        'createdBy': {'id': 1, 'name': '@cname', 'displayName': '@cname'},
        'createdDate': '@date',
        'assignedTo': {'id': 1, 'name': '@cname', 'displayName': '@cname'},
    }
});
