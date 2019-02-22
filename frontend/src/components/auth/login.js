import React, {
    useState
} from 'react'
import { connect } from 'react-redux'
import { LOGIN } from '../../redux/actions/authActions'


const Login = () => {
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

        this.props.login(username, password)

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

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        currentUser: state.auth.currentUser,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(LOGIN(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)