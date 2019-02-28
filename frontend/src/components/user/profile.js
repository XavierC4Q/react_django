import React, { useEffect } from 'react'
import {
    connect
} from 'react-redux'
import {
    GET_ALL_USER_MOODS_ACTION,
    GET_PROFILE_USER_ACTION,
    ADD_NEW_MOOD_ACTION,
} from '../../redux/actions/userActions'
import { EDIT_USER_ACTION } from '../../redux/actions/authActions';
import { Route, Link, withRouter } from 'react-router-dom';

import MoodList from './moodList';
import NewMood from './newMood';
import EditUser from './edit';


const Profile = ({ 
    id, 
    currentUser, 
    profileUser, 
    loggedIn, 
    moods, 
    userError, 
    getAllMoods, 
    getProfileUser, 
    addMood, 
    editUser }) => {

    useEffect(() => {
        getProfileUser(id)
        getAllMoods(id)
    }, [id])

    const newMoodUrl = `/profile/${id}/new`
    const mainProfileUrl = `/profile/${id}`
    const editUserUrl = `/profile/${id}/edit`

    const renderMoodList = () => {
        return (
        <MoodList 
            id={id}
            moods={moods} 
            owner={profileUser} 
            currentUser={currentUser} 
            />
        )
    }

    const renderNewMoodPage = () => {
        return (
            <NewMood
                id={id}
                owner={profileUser}
                currentUser={currentUser}
                addNewEntry={addMood}
                />
        )
    }

    const renderUserEdit = () => {
        return (
            <EditUser
                edit={editUser}
                id={id}
                owner={profileUser}
                currentUser={currentUser}
                />
        )
    }

    return (<div>
        <nav>
            <Link to={mainProfileUrl}>Main</Link>
            {" "}
            <Link to={newMoodUrl}>New Entry</Link>
            {" "}
            <Link to={editUserUrl}>Edit User</Link>
            {" "}
        </nav>
        <Route path='/profile/:id/new' render={renderNewMoodPage} />
        <Route path='/profile/:id/edit' render={renderUserEdit} />
        <Route exact path='/profile/:id' render={renderMoodList} />
    </div>);
}
 
const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        loggedIn: state.authReducer.loggedIn,
        profileUser: state.userReducer.profileUser,
        moods: state.userReducer.moods,
        userError: state.userReducer.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllMoods: user_id => dispatch(GET_ALL_USER_MOODS_ACTION(user_id)),
        getProfileUser: id => dispatch(GET_PROFILE_USER_ACTION(id)),
        addMood: moodInfo => dispatch(ADD_NEW_MOOD_ACTION(moodInfo)),
        editUser: (id, userChanges) => dispatch(EDIT_USER_ACTION(id, userChanges))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
