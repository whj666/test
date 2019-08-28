import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/test"
                        render={props => (
                            <div>
                                首页
                                <a
                                    onClick={() =>
                                        props.history.push('/test/a')
                                    }
                                >
                                    a
                                </a>
                            </div>
                        )}
                    />
                    <Route path="/test/a" render={() => <div>a</div>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
