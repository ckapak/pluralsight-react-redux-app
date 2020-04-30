import * as types from './actionTypes'
import * as courseApi from '../../api/courseApi'

// action creators
export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course }
}

export function updateCourseSuccess(courses) {
  return { type: types.UPDATE_COURSE_SUCCESS, courses }
}

// thunk
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses))
      })
      .catch(error => {
        throw error
      })
  }
}

// thunk
export function saveCourse(course) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse))
      })
      .catch(error => {
        throw error
      })
  }
}