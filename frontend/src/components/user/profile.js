import React, { useEffect } from 'react'
import {
    connect
} from 'react-redux'
import {
    GET_ALL_USER_MOODS_ACTION,
    GET_PROFILE_USER_ACTION
} from '../../redux/actions/userActions'


const Profile = ({ id, currentUser, loggedIn, moods, userError, getAllMoods, getProfileUser }) => {
    useEffect(() => {
        getProfileUser(id)
        getAllMoods(id)
    }, [])
    return (<div>
        <h1>Welcome to Profile</h1>
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
        getProfileUser: id => dispatch(GET_PROFILE_USER_ACTION(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
