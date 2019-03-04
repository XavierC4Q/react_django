import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {EDIT_USER_ACTION} from '../../redux/actions/authActions'

const EditUser = ({currentUser, edit}) => {

  if (!currentUser) {
    return <Redirect to='/'/>
  }

  const initialState = {
    username: '',
    email: '',
    name: '',
    state: ''
  }
  const [fields,
    setField] = useState(initialState);

  const handleInput = event => {
    setField({
      ...fields,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmission = event => {
    event.preventDefault();
    const userChanges = {
      ...fields,
      username: fields.username
        ? fields.username
        : currentUser.username,
      state: fields.state
        ? fields.state
        : currentUser.state
    }

    edit(currentUser.pk, userChanges);
    setField(initialState);
  }

    return (
      <div>
        <h1>Edit your Profile</h1>
        <form onSubmit={handleSubmission}>
          <input
            name='username'
            placeholder='Change your username'
            value={fields.username}
            onChange={handleInput}/>
          <input
            name='email'
            placeholder='Change your email'
            value={fields.email}
            onChange={handleInput}/>
          <input
            name='state'
            placeholder='Change your state'
            value={fields.state}
            onChange={handleInput}/>
          <input
            name='name'
            placeholder='Change your name'
            value={fields.name}
            onChange={handleInput}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    edit: (id, userChanges) => dispatch(EDIT_USER_ACTION(id, userChanges))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);