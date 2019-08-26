import http from 'axios';

const $http = http.create({
    baseURL: '/api/site-web',
    timeout: 50000000,
    headers: {
        'TM-Header-Token': undefined,
        'TM-Header-TenantId': undefined,
        'TM-Header-UserId': undefined
    }
});

$http.interceptors.response.use(
    function(response) {
        let data = response.data;

        if (data) {
            if (data.success) {
                return data.data;
            } else if (data.success === false) {
                let code = data.errors[0].code;
                let message = data.errors[0].message;

                if (code === '405') {
                    alert('无权限访问');
                    location.href = '/login';
                } else if (code === '406') {
                    alert('帐号在异地登录，请重新登录');
                    location.href = '/login';
                } else {
                    return Promise.reject(message);
                }
            }
        } else {
            return Promise.reject('服务器错误');
        }
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default $http;

/*
 *  后端返回格式模板示例：
    {
        "success": false,
        "errors": [{
            "internationalized": true,
            "code": "405",
            "message": "token is null or not exists"
        }]
    }

    {
        "success": true,
        "data": [{a: 1}]
    }
*/
