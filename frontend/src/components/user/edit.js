import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const EditUser = ({ id, owner, currentUser, edit }) => {
    const initialState = {
        username: '',
        email: '',
        name: '',
        state: ''
    }
    const [fields, setField] = useState(initialState)

    const handleInput = event => {
        setField({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmission = event => {
        event.preventDefault();
        const userChanges = {
            ...fields,
            username: fields.username ? fields.username : owner.username,
            state: fields.state ? fields.state : owner.state
        }
        
        edit(id, userChanges)
        setField(initialState)
    }

    if (owner && currentUser) {
        return (
            <div>
                <h1>Edit your Profile</h1>
                <form onSubmit={handleSubmission}>
                    <input 
                        name='username'
                        placeholder='Change your username'
                        value={fields.username}
                        onChange={handleInput}
                        />
                    <input 
                        name='email'
                        placeholder='Change your email'
                        value={fields.email}
                        onChange={handleInput}
                        />
                    <input 
                        name='state'
                        placeholder='Change your state'
                        value={fields.state}
                        onChange={handleInput}
                        />
                    <input 
                        name='name'
                        placeholder='Change your name'
                        value={fields.name}
                        onChange={handleInput}
                        />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
    return <Redirect to='/' />
}
 
export default EditUser;