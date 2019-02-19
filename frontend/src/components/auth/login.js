import React, {
    useState
} from 'react'

export const Login = () => {
    const [fields, setField] = useState({
        username: '',
        password: ''
    })

    const handleInput = event => {
        setField({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(JSON.stringify(fields, null, 5))
        setField({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='username'
                    onChange={handleInput}
                    value={fields.username}
                    placeholder='Enter username'
                />
                <input 
                    type='text'
                    name='password'
                    onChange={handleInput}
                    value={fields.password}
                    placeholder='Enter password'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}