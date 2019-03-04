import {USER_ERROR, POST_MOOD, GET_USER_MOODS} from '../types/userTypes';

import axios from 'axios';

const userError = error => {
  return {type: USER_ERROR, payload: error}
}

export const GET_ALL_USER_MOODS_ACTION = user_id => {
  return async dispatch => {
    try {
      const url = `/api/moods/?user_id=${user_id}`
      const getMoods = await axios.get(url)

      dispatch({type: GET_USER_MOODS, payload: getMoods.data})
    } catch {
      dispatch(userError('Failed to get user moods'))
    }
  }
}

export const ADD_NEW_MOOD_ACTION = moodInfo => {
  return async dispatch => {
    try {
      const addMood = await axios.post('/api/moods/', moodInfo)

      dispatch({type: POST_MOOD, payload: addMood.data})
    } catch (err) {
      dispatch(userError('Failed to add new mood'))
    }
  }
}
