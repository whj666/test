import React from 'react';
import { queryMeetingList } from 'utils/action.js';
import { LoadingHoc } from 'component/LoadingHoc';

@LoadingHoc
class App extends React.Component {
    componentDidMount() {
        this.init();
        //this.init_1();
    }

    //同步请求
    init = async () => {
        this.props.toggleLoading();
        const res = await queryMeetingList({
            siteId: '027028eb7553472c9d94a650001af23a',
            pageNum: 1,
            pageSize: 20,
            queryType: 'hand'
        });
        this.props.toggleLoading();

        if (res !== undefined) {
            console.log(res);
        }
    };

    //异步请求
    init_1 = () => {
        this.props.toggleLoading();
        queryMeetingList({
            siteId: '027028eb7553472c9d94a650001af23a',
            pageNum: 1,
            pageSize: 20,
            queryType: 'hand'
        })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.props.toggleLoading();
            });
    };

    render() {
        return <React.Fragment>hello world</React.Fragment>;
    }
}

export default App;
