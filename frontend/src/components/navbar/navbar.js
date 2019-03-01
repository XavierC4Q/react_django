import React from 'react';
import { Link } from 'react-router-dom';
import { LOGOUT_ACTION } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

import './navbar.css'

const authLinks = () => {
    const urlPaths = [
        { path: '/', name: 'Home' },
        { path: '/login', name: 'Login' },
        { path: '/register', name: 'Register' }
    ]

    return urlPaths.map(url => (
        <Link className='nav-link' to={url.path}>{url.name}</Link>
    ))
}

const loggedInLinks = (currentUser) => {
    const urlPaths = [
        { path: '/', name: 'Home' },
        { path: `/profile/${currentUser.pk}`, name: 'My Profile' }
    ]

    return urlPaths.map(url => (
        <Link className='nav-link' to={url.path}>{url.name}</Link>
    ))
}

export const Navbar = ({ loggedIn, currentUser, logout }) => {
    return (
        <div className='navbar-container'>
            <div className='title-container'>
                <p className='title'>
                MOODS
                </p>
            </div>
            <nav className='navbar'>
                {loggedIn ? loggedInLinks(currentUser) : authLinks()}
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