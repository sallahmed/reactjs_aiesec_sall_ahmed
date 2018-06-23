import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css'

// Dashboard Page
import { Dashboard } from './views';
// Login Page
import { Login } from './views/Pages';
// Logout Page
import { Logout } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" name="Login Page" component={Login} />
          <Route path="/dashboard" name="Dashboard" component={Dashboard} />
          <Route path="/logout" name="Logout" component={Logout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
