import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {GET_ALL_USER_MOODS_ACTION} from '../../redux/actions/userActions'

const moodEntries = (moods) => {
  return moods.map(mood => (
    <div>
      <h3>{mood.title}</h3>
      <p>Primary Emotion: {mood.primary_mood}</p>
      <p>Secondary Emotion: {mood.secondary_mood}</p>
    </div>
  ));
}

const MoodList = ({moods, currentUser, getMoods}) => {
  if (!currentUser) {
    return <Redirect to='/'/>
  }

  useEffect(() => {
    getMoods(currentUser.pk)
  }, [])

  return (
    <div>
      <h1>Your Moods</h1>
      {moods.length !== 0 && moodEntries(moods)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    moods: state.userReducer.moods
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoods: (id) => dispatch(GET_ALL_USER_MOODS_ACTION(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodList);