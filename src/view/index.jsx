import React from 'react';
import { queryMeetingList } from 'utils/action.js';

export default class App extends React.Component {
    componentDidMount() {
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
            });
    }

    render() {
        return <React.Fragment>hello world</React.Fragment>;
    }
}
