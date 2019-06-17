import React from 'react';
import './style';
import imgSrc from './timg.gif';
import videoSrc from './cxk.mp4';
import 'font-awesome/css/font-awesome.css';
import { DatePicker } from 'antd';

export default class App extends React.Component {
    componentDidMount() {
        this.saySomething();
    }

    saySomething = () => {
        console.log('鸡你太美');
    };

    render() {
        return (
            <React.Fragment>
                <div className="whj">鸡你太美</div>
                <i class="fa fa-camera-retro fa-5x" />
                <DatePicker />
                <div className="img" />
                <img src={imgSrc} />
                <video src={videoSrc} controls />
            </React.Fragment>
        );
    }
}
