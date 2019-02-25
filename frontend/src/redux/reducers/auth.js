import {
    LOGIN,
    REGISTER,
    LOGOUT,
    AUTH_ERROR,
    EDIT_USER,
    GET_LOGGED_IN_USER
} from '../types/authTypes'

export default (state = {
    currentUser: null,
    loggedIn: false,
    error: ''
}, action) => {
    const {
        type,
        payload
    } = action

    switch (type) {
        case LOGIN:
            return {
                currentUser: payload,
                loggedIn: true,
                error: ''
            }
        case REGISTER:
            return {
                currentUser: payload,
                loggedIn: true,
                error: ''
            }
        case GET_LOGGED_IN_USER:
            return {
                currentUser: payload,
                loggedIn: true,
                error: ''
            }
        case EDIT_USER:
            return {
                ...state,
                currentUser: payload
            }
        case LOGOUT:
            return {
                currentUser: null,
                loggedIn: false,
                error: ''
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}