import * as types from '../actions/actionTypes'
import initialState from './initiateState'

// the state needs to store an array of courses so it is empty

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }]
    case types.LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state
  }
}