import * as types from './actionTypes'

// this is a reducer
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }
}