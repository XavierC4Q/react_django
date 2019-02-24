import React, {
    useState
} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LOGIN_ACTION } from '../../redux/actions/authActions'


const Login = ({ login, currentUser, error, loggedIn }) => {
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
        const { username, password } = fields

        login(username, password)

        setField({
            username: '',
            password: ''
        })
    }
    if (loggedIn) {
        return (<Redirect to='/' />)
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
                <div>
                    {error}
                </div>
            </form>
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
        login: (username, password) => dispatch(LOGIN_ACTION(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)