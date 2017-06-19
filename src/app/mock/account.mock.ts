import * as Mock from 'mockjs';
import { BASE_URL } from '../service/config';


Mock.mock(new RegExp(`${BASE_URL}/account/login$`), 'post', {
    'data': {
        id: 1,
        username: 'demo',
        name: 'Demo',
        displayName: 'Demo',
        photo: './'
    }
});
