import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {Input} from '../util/input';

import {LOGIN_ACTION} from '../../redux/actions/authActions';

import './auth.css';

const Login = ({login, loggedIn}) => {
  const [fields,
    setField] = useState({username: '', password: '', error: ''})

  const handleInput = event => {
    setField({
      ...fields,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const {username, password} = fields;
    let errMessage = '';

    login(username, password);

    if (!loggedIn) {
      errMessage = 'Wrong username/password'
    }
    setField({username: '', password: '', error: errMessage});
  }
  if (loggedIn) {
    return (<Redirect to='/'/>)
  }
  return (
    <div className='login-wrap'>
      <h1 className='login-header'>Login Form</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <Input
          type='text'
          name='username'
          handleChange={handleInput}
          value={fields.username}
          label='Your Username'
          placeholder='Enter username'/>
        <Input
          type='text'
          name='password'
          handleChange={handleInput}
          value={fields.password}
          label='Your Password'
          placeholder='Enter password'/>
        <button type='submit'>Submit</button>
      </form>
      <div>{fields.error}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {loggedIn: state.authReducer.loggedIn, error: state.authReducer.error}
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(LOGIN_ACTION(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)