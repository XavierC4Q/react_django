import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const NewMood = ({ id, owner, currentUser, addNewEntry }) => {

    const initialState = {
        title: '',
        body: '',
        primary_mood: '',
        secondary_mood: ''
    }

    const [fields, setField] = useState(initialState)

    const handleFieldInput = event => {
        setField({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    const handleMoodEntry = event => {
        event.preventDefault();
        const moodInfo = {...fields, user_id: Number(id)}
        addNewEntry(moodInfo)
        setField(initialState)
    }
    
    if (owner && currentUser) {
        return (
            <div>
                <h1>Your Next Entry</h1>
                <form onSubmit={handleMoodEntry}>
                    <input 
                        name='title'
                        placeholder='Enter a title'
                        value={fields.title}
                        onChange={handleFieldInput}
                        />
                    <input 
                        name='body'
                        placeholder='Describe your feelings'
                        value={fields.body}
                        onChange={handleFieldInput}
                        />
                    <input 
                        name='primary_mood'
                        placeholder='Main feeling'
                        value={fields.primary_mood}
                        onChange={handleFieldInput}
                        />
                    <input 
                        name='secondary_mood'
                        placeholder='Secondary feeling?'
                        value={fields.secondary_mood}
                        onChange={handleFieldInput}
                        />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
    return (<Redirect to='/' />)
}
 
export default NewMood;