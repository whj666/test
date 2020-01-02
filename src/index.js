import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import 'utils/common.less';
import App from './view';

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
