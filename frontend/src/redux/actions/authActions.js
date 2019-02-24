import {
    LOGIN,
    LOGOUT,
    REGISTER,
    AUTH_ERROR
} from '../types/authTypes'

import axios from 'axios'

const userAuthError = error => {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

const loginUser = user => {
    return {
        type: LOGIN,
        payload: user
    }
}
export const LOGIN_ACTION = (username, password) => {
    return async dispatch => {
        try {
            const doLogin = await axios.post('/auth/login/', {
                username,
                password
            })

            localStorage.setItem('auth_token', doLogin.data.key)

            const getLoggedInUser = await axios.get('/auth/user/')

            dispatch(loginUser(getLoggedInUser.data))
        } catch {
            dispatch(userAuthError('Wrong username/password'))
        }
    }
}

const registerUser = user => {
    return {
        type: REGISTER,
        payload: user
    }
}

export const REGISTER_ACTION = (username, password, confirmPassword) => {
    return async dispatch => {
        try {
            const doRegister = await axios.post('/auth/signup/', {
                username,
                password1: password,
                password2: confirmPassword
            })

            localStorage.setItem('auth_token', doRegister.data.key)

            const getLoggedInUser = await axios.get('/auth/user/')

            dispatch(registerUser(getLoggedInUser.data))
        } catch {
            dispatch(userAuthError('Username is taken/passwords do not match'))
        }
    }
}

const logoutUser = () => {
    return {
        type: LOGOUT
    }
}

export const LOGOUT_ACTION = () => {
    return async dispatch => {
        await axios.post('/auth/logout/')
        dispatch(logoutUser())
        return null
    }
}