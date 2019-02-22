import React, { useState } from 'react';
import { REGISTER } from '../../redux/types/authTypes';
import { connect } from 'react-redux';

const Register = () => {
    const [fields, setField] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        message: ''
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
        let errors = ''
        
        if (!username) {
            errors += 'USERNAME REQUIRED'
        }
        if (!password) {
            errors += 'PASSWORD REQUIRED'
        }
        if (password !== confirmPassword) {
            errors += 'PASSWORDS MUST MATCH'
        }
        setField({
            username: '',
            password: '',
            confirmPassword: '',
            message: errors
        })
        console.log(JSON.stringify(fields, null, 5))
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
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        currentUser: state.auth.currentUser,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (username, password) => dispatch(REGISTER(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)