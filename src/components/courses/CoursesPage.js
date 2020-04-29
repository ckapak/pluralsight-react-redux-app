import React from 'react'

// connect to Redux
import { connect } from 'react-redux'

import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {

  state = {
    course: {
      title: ""
    }
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value }
    this.setState({ course })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(courseActions.createCourse(this.state.course))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course </h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title} />
        <input type="submit" value="Save" />
      </form>
    )
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapsStateToProps(state) {
  return {
    courses: state.courses
  }
}

export default connect(mapsStateToProps)(CoursesPage)