import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Action from '../action';

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

                <Route path={`${path}a`} render={() => <Action />} />
            </Switch>
        );
    }
}

export default App;
