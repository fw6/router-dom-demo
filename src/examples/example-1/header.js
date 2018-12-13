import React from 'react'
import { Link } from 'react-router-dom'

export default ({ match }) => (
  <ul>
    <li>
      <Link to={`${match.path}`}>Home</Link>
    </li>
    <li>
      <Link to={`${match.path}/about`}>About</Link>
    </li>
    <li>
      <Link to={`${match.path}/topics`}>Topics</Link>
    </li>
  </ul>
)
