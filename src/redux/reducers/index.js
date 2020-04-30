import { combineReducers } from 'redux'
import courses from './courseReducer'
import authors from './authorReducer'
import apiCallsInProgress from './apiStatusReducer'

// remember when you create a new reducer, you need to reference it here
const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
})

export default rootReducer