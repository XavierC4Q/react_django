import React from 'react'
import {connect} from 'react-redux'
import {Route, Link, withRouter, Redirect} from 'react-router-dom';

import MoodList from './moodList';
import NewMood from './newMood';
import EditUser from './edit';

const Profile = ({
  loggedIn,
  ...props
}) => {

  if (!loggedIn) {
    return <Redirect to='/'/>
  }

  const id = props.match.params.id

  const newMoodUrl = `/profile/${id}/new`
  const mainProfileUrl = `/profile/${id}`
  const editUserUrl = `/profile/${id}/edit`

  return (
    <div>
      <nav>
        <Link to={mainProfileUrl}>Main</Link>
        {" "}
        <Link to={newMoodUrl}>New Entry</Link>
        {" "}
        <Link to={editUserUrl}>Edit User</Link>
        {" "}
      </nav>
      <Route path='/profile/:id/new' component={NewMood}/>
      <Route path='/profile/:id/edit' component={EditUser}/>
      <Route exact path='/profile/:id' component={MoodList}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {loggedIn: state.authReducer.loggedIn}
}

export default withRouter(connect(mapStateToProps, null)(Profile));
