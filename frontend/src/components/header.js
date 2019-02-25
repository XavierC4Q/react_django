import React from 'react';
import { Link } from 'react-router-dom';
import { LOGOUT_ACTION } from '../redux/actions/authActions';
import { connect } from 'react-redux';

export const Header = ({ loggedIn, currentUser, logout }) => {
    if (!loggedIn) {
        return (
            <div>
                <Link to='/login'>Login</Link>
                {" "}
                <Link to='/register'>Register</Link>
                {" "}
                <Link to='/'>Home</Link>
                {" "}
            </div>
        )
    }
    
    const profileUrl = `/profile/${currentUser.pk}`

    return (<div>
        <nav>
        <Link to='/'>Home</Link>
                {" "}
        <Link to={profileUrl}>Profile</Link>
        {" "}
        <button onClick={logout}>Logout Here</button>
        </nav>
    </div>)
}

const mapStateToProps = state => {
    return {
        loggedIn: state.authReducer.loggedIn,
        currentUser: state.authReducer.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(LOGOUT_ACTION())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)