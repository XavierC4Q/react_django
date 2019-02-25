import {
    USER_ERROR,
    POST_MOOD,
    GET_USER_MOODS
} from '../types/userTypes';

import axios from 'axios';

const getUserMoods = moods => {
    return {
        type: GET_USER_MOODS,
        payload: moods
    }
}

