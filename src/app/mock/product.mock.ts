import { MockUtil } from './mock-util';

MockUtil.get(`/api/products`, {
    'products|15': [{
        'id|+1': 1,
        'name': '@ctitle(6, 20)',
        'code': '@title(1, 3)'
    }]
});


MockUtil.get(`/api/products/\\d$`, {
    'data': {
        'id': 1,
        'name': '@ctitle(6, 20)',
        'code': '@title(1, 3)',
        'description': '@cparagraph()'
    }
});
