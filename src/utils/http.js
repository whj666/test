import http from 'axios';

//初始化配置
const $http = http.create({
    baseURL: '/adm/admin',
    timeout: 50000000
});

//拦截器
$http.interceptors.response.use(
    function(response) {
        let data = response.data;

        if (data) {
            if (data.success) {
                return data.data;
            } else if (data.success !== undefined && !data.success) {
                let code = data.errors[0].code;

                if (code === '405') {
                    alert('无权限访问');
                    location.href = '/login';
                } else if (code === '406') {
                    alert('帐号在异地登录，请重新登录');
                    location.href = '/login';
                } else {
                    return Promise.reject(data.errors);
                }
            } else {
                return Promise.reject('服务器错误');
            }
        } else {
            return Promise.reject('服务器错误');
        }
    },
    function() {
        return Promise.reject('服务器错误');
    }
);

export default $http;
