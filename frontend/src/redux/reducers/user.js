import {POST_MOOD, GET_USER_MOODS, USER_ERROR} from '../types/userTypes';

export default(state = {
  moods: [],
  errors: ''
}, action) => {
  const {type, payload} = action

  switch (type) {
    case GET_USER_MOODS:
      return {
        ...state,
        errors: '',
        moods: payload
      }
    case POST_MOOD:
      return {
        ...state,
        moods: [
          ...state.moods,
          payload
        ]
      }
    case USER_ERROR:
      return {
        ...state,
        errors: payload
      }
    default:
      return state
  }
}