import React from 'react';
import { Drawer } from 'antd';
import styled from 'styled-components';

const Body = styled.div`
    height: calc(100vh - 156px);
    overflow-x: hidden;
    overflow-y: auto;
    margin-right: -23px;

    > div {
        padding-right: 23px;
    }
`;

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #e8e8e8;
    padding: 10px;
    text-align: right;
    left: 0;
    height: 53px;
`;

class App extends React.Component {
    render() {
        const {
            title,
            placement = 'right',
            destroyOnClose = true,
            width = '30%',
            visible,
            onClose,
            body,
            footer
        } = this.props;

        return (
            <Drawer
                title={title}
                placement={placement}
                destroyOnClose={destroyOnClose}
                width={width}
                visible={visible}
                onClose={onClose}
            >
                <Body>
                    <div>{body}</div>
                </Body>

                <Footer>{footer}</Footer>
            </Drawer>
        );
    }
}

export default App;
