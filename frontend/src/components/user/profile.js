import React from 'react'
import {
    connect
} from 'react-redux'
import {
    GET_ALL_USER_MOODS
} from '../../redux/actions/userActions'


const Profile = ({ currentUser, loggedIn, moods, userError, getAllMoods }) => {
    return (<div>
        {currentUser && <h1>Welcome {currentUser.username}</h1>}
    </div>);
}
 
const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        loggedIn: state.authReducer.loggedIn,
        moods: state.userReducer.moods,
        userError: state.userReducer.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllMoods: (user_id) => dispatch(GET_ALL_USER_MOODS(user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
