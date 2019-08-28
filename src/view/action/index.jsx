import React from 'react';
import { queryMeetingList } from 'utils/action';

class App extends React.Component {
    async componentDidMount() {
        await this.init();
    }

    //初始化
    init = async () => {
        try {
            let params = {
                siteId: '027028eb7553472c9d94a650001af23a',
                pageNum: 1,
                pageSize: 20,
                queryType: 'hand'
            };

            const res = await queryMeetingList(params);

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return '请求';
    }
}

export default App;
