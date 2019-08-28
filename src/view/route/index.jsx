import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

@withRouter
class App extends React.Component {
    render() {
        const {
            match: { path }
        } = this.props;

        return (
            <Switch>
                <Route
                    exact
                    path={path}
                    render={props => (
                        <div>
                            首页
                            <a onClick={() => props.history.push(`${path}a`)}>
                                a
                            </a>
                        </div>
                    )}
                />

                <Route path={`${path}a`} render={() => <div>a</div>} />
            </Switch>
        );
    }
}

export default App;
