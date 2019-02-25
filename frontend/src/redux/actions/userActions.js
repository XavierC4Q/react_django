import {
    USER_ERROR,
    POST_MOOD,
    GET_USER_MOODS
} from '../types/userTypes';

import axios from 'axios';

const userError = error => {
    return {
        type: USER_ERROR,
        payload: error
    }
}

const getUserMoods = moods => {
    return {
        type: GET_USER_MOODS,
        payload: moods
    }
}

export const GET_ALL_USER_MOODS = user_id => {
    return async dispatch => {
        try {
            const url = `/api/moods/?user_id=${user_id}`
            const getMoods = await axios.get(url)

            console.log(getMoods)
        } catch {
            dispatch(userError('Failed to get user moods'))
        }
    }
}

