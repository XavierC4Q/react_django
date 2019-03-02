import React from 'react';
import { Link } from 'react-router-dom';
import { LOGOUT_ACTION } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

import './navbar.css'

const authLinks = () => {
    const urlPaths = [
        { path: '/login', name: 'Login' },
        { path: '/register', name: 'Join' }
    ]

    return urlPaths.map(url => (
        <Link className='nav-link' to={url.path}>{url.name}</Link>
    ))
}

export const Navbar = ({ loggedIn, currentUser, logout }) => {
    return (
        <div className='navbar-container'>
            <div className='title-container'>
                <Link to='/' className='title'>
                MOODS
                </Link>
            </div>
            <nav className='navbar'>
                {!loggedIn ? authLinks() : null}
                {loggedIn && <span className='logout' onClick={logout}>Logout</span>}
            </nav>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)