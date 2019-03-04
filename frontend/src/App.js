import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import Login from './components/auth/login'
import Register from './components/auth/register'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Profile from './components/user/profile'

import { LOGGED_IN_USER_ACTION } from './redux/actions/authActions';

import './App.css'


const App = ({ getLoggedInUser }) => {

  useEffect(() => {
    getLoggedInUser()
  }, [])

    return (
      <div className='app-wrap'>
        <Navbar />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/' component={Home} />
      </div>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    getLoggedInUser: () => dispatch(LOGGED_IN_USER_ACTION())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
