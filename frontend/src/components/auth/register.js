import React, { useState } from 'react';
import { REGISTER_ACTION } from '../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Register = ({ registerUser, loggedIn, error }) => {
    const [fields, setField] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleInput = event => {
        setField({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        const { username, password, confirmPassword } = fields
        
        setField({
            username: '',
            password: '',
            confirmPassword: ''
        })
        
        registerUser(username, password, confirmPassword)
    }

    if (loggedIn) {
        return (<Redirect to='/' />)
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='username'
                    value={fields.username}
                    onChange={handleInput}
                    placeholder='Enter username'
                />
                <input 
                    type='text'
                    name='password'
                    value={fields.password}
                    onChange={handleInput}
                    placeholder='Enter password'
                />
                <input 
                    type='text'
                    name='confirmPassword'
                    value={fields.confirmPassword}
                    onChange={handleInput}
                    placeholder='Confirm your password'
                />
                <button type='submit'>Submit</button>
            </form>
            <div>
                {error}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loggedIn: state.authReducer.loggedIn,
        error: state.authReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (username, password, confirmPassword) => dispatch(REGISTER_ACTION(username, password, confirmPassword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)