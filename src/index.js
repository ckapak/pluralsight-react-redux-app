import React from 'react'
import { render } from 'react-dom'

function Hi() {
  return <h1>Hello</h1>
}

render(<Hi />, document.getElementById('app'))
