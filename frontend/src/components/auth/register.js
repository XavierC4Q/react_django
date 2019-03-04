import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {Input} from '../util/input';

import {REGISTER_ACTION} from '../../redux/actions/authActions';

const showErrors = errors => {
  return errors.map(err => (
    <span>{err + ' '}</span>
  ))
}

const Register = ({registerUser, loggedIn}) => {
  const [fields,
    setField] = useState({username: '', password: '', confirmPassword: '', errors: []})

  const handleInput = event => {
    setField({
      ...fields,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    const {username, password, confirmPassword} = fields

    registerUser(username, password, confirmPassword)

    validate(fields, setField)

  }

  if (loggedIn) {
    return (<Redirect to='/'/>)
  }

  return (
    <div className='form-wrap'>
      <div className='form-header'>
        <div className='header-red'></div>
        <div className='header-orange'></div>
        <div className='header-light-green'></div>
        <div className='header-dark-green'></div>
        <div className='header-dark-blue'></div>
        <div className='header-light-blue'></div>
        <div className='header-yellow'></div>
        <div className='header-purple'></div>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <Input
          type='text'
          name='username'
          value={fields.username}
          handleChange={handleInput}
          label='Your Username'
          placeholder='Enter Username'/>
        <Input
          type='text'
          name='password'
          value={fields.password}
          handleChange={handleInput}
          label='Enter your password'
          placeholder='Enter Password'/>
        <Input
          type='text'
          name='confirmPassword'
          value={fields.confirmPassword}
          handleChange={handleInput}
          label='Confirm Your Password'
          placeholder='Confirm Password'/>
        <button type='submit' className='submit-btn'>Submit</button>
        <div className='form-error'>
          {fields.errors.length !== 0 && showErrors(fields.errors)}
        </div>
      </form>
    </div>
  )
}

const validate = (fields, setField) => {
  const {username, password, confirmPassword} = fields
  let errors = []

  if (!username) {
    errors.push('Username is required')
  }
  if (username && username.length < 9) {
    errors.push('Username is too short')
  }
  if (!password) {
    errors.push('Password is required')
  }
  if (password && password.length < 8) {
    errors.push('Password is too short')
  }
  if (!confirmPassword || confirmPassword !== password) {
    errors.push('Passwords must match')
  }

  setField({username: '', password: '', confirmPassword: '', errors: errors})
}

const mapStateToProps = state => {
  return {loggedIn: state.authReducer.loggedIn}
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (username, password, confirmPassword) => dispatch(REGISTER_ACTION(username, password, confirmPassword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)