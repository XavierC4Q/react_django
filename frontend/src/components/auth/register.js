import React, { useState } from 'react';

export const Register = () => {
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
        let res = {}
        
        res.username = username
        res.password = password
        res.confirmPassword = confirmPassword
        res.message = ''

        if (!username) {
            res.message = res.message + 'USERNAME REQUIRED '
        }
        if (!password) {
            res.message = res.message + 'PASSWORD REQUIRED'
        }
        if (password !== confirmPassword) {
            res.message = res.message + 'PASSWORDS DO NOT MATCH'
        }
        setField(res)
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