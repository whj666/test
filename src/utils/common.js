//读取缓存  item(名称: string)
export const getSessionStorage = item => {
    return sessionStorage[item] && JSON.parse(sessionStorage[item]);
};

//设置缓存 item(名称: string) option(属性: object)
export const setSessionStorage = (item, option) => {
    sessionStorage[item] = JSON.stringify(
        Object.assign({}, getSessionStorage(item), option)
    );
};
