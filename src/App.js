import React from 'react';
import Layout from './views/layout'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/layout" component={Layout} />
            <Redirect exact from="/" to="/layout/home" />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
