import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Login from './components/auth/login'
import Register from './components/auth/register'
import { Home } from './components/home'
import { Header } from './components/header'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
