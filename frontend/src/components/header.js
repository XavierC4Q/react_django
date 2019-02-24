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
    return (<div>
        <button onClick={logout}>Logout Here</button>
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