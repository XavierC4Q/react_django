import {
    LOGIN,
    LOGOUT,
    REGISTER,
    AUTH_ERROR,
    GET_LOGGED_IN_USER
} from '../types/authTypes'

import axios from 'axios'

const userAuthError = error => {
    return {
        type: AUTH_ERROR,
        payload: error
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

            dispatch({
                type: LOGIN,
                payload: getLoggedInUser.data
            })
        } catch {
            dispatch(userAuthError('Wrong username/password'))
        }
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

            const getNewUser = await axios.get('/auth/user/')

            dispatch({
                type: REGISTER,
                payload: getNewUser.data
            })
        } catch {
            dispatch(userAuthError('Username is taken/passwords do not match'))
        }
    }
}

export const LOGOUT_ACTION = () => {
    return async dispatch => {
        await axios.post('/auth/logout/')
        dispatch({ type: LOGOUT })
        return null
    }
}

export const LOGGED_IN_USER_ACTION = () => {
    return async dispatch => {
        try {
            const loggedInUser = await axios.get('/auth/user/')
            
            return dispatch({
                type: GET_LOGGED_IN_USER,
                payload: loggedInUser.data
            })
        } catch {
            dispatch(userAuthError('Could not retrieve logged in user'))
        }
    }
}