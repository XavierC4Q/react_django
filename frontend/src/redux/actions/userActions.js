import {
    USER_ERROR,
    POST_MOOD,
    GET_USER_MOODS,
    GET_PROFILE_USER
} from '../types/userTypes';

import axios from 'axios';

const userError = error => {
    return {
        type: USER_ERROR,
        payload: error
    }
}



const getProfileUser = user => {
    return {
        type: GET_PROFILE_USER,
        payload: user
    }
}

export const GET_PROFILE_USER_ACTION = id => {
    return async dispatch => {
        try {
            const profileUser = await axios.get(`/api/users/${id}`)
            dispatch(getProfileUser(profileUser.data))
        } catch {
            dispatch(userError('User with that ID not found'))
        }
    }
}



const getUserMoods = moods => {
    return {
        type: GET_USER_MOODS,
        payload: moods
    }
}

export const GET_ALL_USER_MOODS_ACTION = user_id => {
    return async dispatch => {
        try {
            const url = `/api/moods/?user_id=${user_id}`
            const getMoods = await axios.get(url)
            console.log(getMoods)
            dispatch(getUserMoods(getMoods.data))
        } catch {
            dispatch(userError('Failed to get user moods'))
        }
    }
}

