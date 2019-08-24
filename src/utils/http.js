import http from 'axios';

export default http.create({
    baseURL: '/api/site-web',
    timeout: 50000000,
    headers: {
        'TM-Header-Token': undefined,
        'TM-Header-TenantId': undefined,
        'TM-Header-UserId': undefined
    }
});
