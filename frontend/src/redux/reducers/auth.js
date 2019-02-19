import {
    LOGIN,
    REGISTER,
    LOGOUT,
    AUTH_ERROR
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