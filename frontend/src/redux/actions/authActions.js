import {
    LOGIN,
    LOGOUT,
    REGISTER,
    AUTH_ERROR
} from '../types/authTypes'

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
export const LOGIN = (username, password) => {
    return async dispatch => {
        try {
            // DO API REQUEST USING USERNAME AND PASSWORD
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

export const REGISTER = (username, password) => {
    return async dispatch => {
        try {
            // API REQUEST TO REGISTER USER
        } catch {
            dispatch(userAuthError('Username is taken'))
        }
    }
}

const logoutUser = () => {
    return {
        type: LOGOUT
    }
}

export const LOGOUT = () => {
    return async dispatch => {
        // API REQUEST TO LOGOUT USER AKA REMOVE USER TOKEN
    } 
}