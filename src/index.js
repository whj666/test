import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'utils/common.less';
import App from './view';

render(
    <BrowserRouter basename="/test">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
