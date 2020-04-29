import { combinedReducers } from 'redux'
import courses from './courseReducer'

const rootReducer = combinedReducers({
  courses
})

export default rootReducer