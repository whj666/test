import { message } from 'antd';
import $http from 'utils/http.js';

export const queryMeetingList = params => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await $http.get('/ethicMeeting/queryMeetingList', {
                params
            });

            resolve(res);
        } catch (error) {
            message.error((Array.isArray(error) && error[0].message) || error);
            reject(error);
        }
    });
};
