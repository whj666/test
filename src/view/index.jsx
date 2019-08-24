import React from 'react';
import http from 'utils/http.js';

export default class App extends React.Component {
    componentDidMount() {
        http.get('/ethicMeeting/queryMeetingList', {
            params: {
                siteId: '027028eb7553472c9d94a650001af23a',
                pageNum: 1,
                pageSize: 20,
                queryType: 'hand'
            }
        }).then(data => {
            console.log(data);
        });
    }

    render() {
        return <React.Fragment>hello world</React.Fragment>;
    }
}
