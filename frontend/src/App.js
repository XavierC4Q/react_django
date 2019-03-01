import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import Login from './components/auth/login'
import Register from './components/auth/register'
import { Home } from './components/home'
import Navbar from './components/navbar/navbar'
import Profile from './components/user/profile'

import { LOGGED_IN_USER_ACTION } from './redux/actions/authActions';

import './App.css'


const App = ({ currentUser, loggedIn, getLoggedInUser }) => {

  useEffect(() => {
    getLoggedInUser()
  }, [])

    return (
      <div className='app-wrap'>
        <Navbar />
        <Route path='/profile/:id' render={props => {
          const { id } = props.match.params
          return (<Profile id={id} />)
        }} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/' component={Home} />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    loggedIn: state.authReducer.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLoggedInUser: () => dispatch(LOGGED_IN_USER_ACTION())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
