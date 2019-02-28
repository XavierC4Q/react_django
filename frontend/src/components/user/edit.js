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
        const userChanges = {...fields, id: Number(id)}
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
                        />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
    return <Redirect to='/' />
}
 
export default EditUser;