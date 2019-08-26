import React from 'react';
import { queryMeetingList } from 'utils/action.js';
import { LoadingHoc } from 'component/LoadingHoc';

@LoadingHoc
class App extends React.Component {
    async componentDidMount() {
        this.props.toggleLoading();
        await this.init();
        this.props.toggleLoading();
    }

    //请求
    init = async () => {
        try {
            const res = await queryMeetingList({
                siteId: '027028eb7553472c9d94a650001af23a',
                pageNum: 1,
                pageSize: 20,
                queryType: 'hand'
            });

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return <React.Fragment>hello world</React.Fragment>;
    }
}

export default App;
