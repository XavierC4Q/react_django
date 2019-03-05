import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Redirect} from 'react-router-dom';

import MoodList from './moodList';
import NewMood from './newMood';
import EditUser from './edit';
import Tabs from './tabs';

import './user.css';

const Profile = ({
  loggedIn,
  ...props
}) => {

  if (!loggedIn) {
    return <Redirect to='/'/>
  }

  const id = props.match.params.id;

  return (
    <div className='profile-wrap'>
      <Tabs id={id} />
      <Route path='/profile/:id/new' component={NewMood}/>
      <Route path='/profile/:id/edit' component={EditUser}/>
      <Route exact path='/profile/:id' component={MoodList}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {loggedIn: state.authReducer.loggedIn}
};

export default withRouter(connect(mapStateToProps, null)(Profile));
