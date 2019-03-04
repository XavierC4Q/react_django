import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {ADD_NEW_MOOD_ACTION} from '../../redux/actions/userActions';

const NewMood = ({currentUser, addNewEntry}) => {

  if (!currentUser) {
    return (<Redirect to='/'/>)
  }

  const initialState = {
    title: '',
    body: '',
    primary_mood: '',
    secondary_mood: ''
  }

  const [fields,
    setField] = useState(initialState);

  const handleFieldInput = event => {
    setField({
      ...fields,
      [event.target.name]: event.target.value
    });
  }

  const handleMoodEntry = event => {
    event.preventDefault();
    const moodInfo = {
      ...fields,
      user_id: Number(currentUser.pk)
    }
    addNewEntry(moodInfo);
    setField(initialState);
  }

  return (
    <div>
      <h1>Your Next Entry</h1>
      <form onSubmit={handleMoodEntry}>
        <input
          name='title'
          placeholder='Enter a title'
          value={fields.title}
          onChange={handleFieldInput}/>
        <input
          name='body'
          placeholder='Describe your feelings'
          value={fields.body}
          onChange={handleFieldInput}/>
        <input
          name='primary_mood'
          placeholder='Main feeling'
          value={fields.primary_mood}
          onChange={handleFieldInput}/>
        <input
          name='secondary_mood'
          placeholder='Secondary feeling?'
          value={fields.secondary_mood}
          onChange={handleFieldInput}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {currentUser: state.authReducer.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {
    addNewEntry: moodInfo => dispatch(ADD_NEW_MOOD_ACTION(moodInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMood);