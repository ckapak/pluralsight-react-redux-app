import React, { useEffect } from 'react'
import { connect } from 'react-redux' // connect to Redux
import * as courseActions from '../../redux/actions/courseActions'
import * as authorActions from '../../redux/actions/authorActions'
import PropTypes from 'prop-types'

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert('Loading courses failed' + error)
      })
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert('Loading authors failed' + error)
      })
    }
  }, [])

  return (
    <>
      <h2>Manage Course</h2>
    </>
  )
}

// PropTypes
ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
}

// Redux Mappings 
function mapsStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses
  }
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
}

// Redux connect
export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(ManageCoursePage)