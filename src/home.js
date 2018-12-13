import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <ol>
      <li>
        <Link to="/example-1">EXAMPLE-1 Nested Routing</Link>
      </li>
      <li>
        <Link to="/example-2">EXAMPLE-2 URL Parameters</Link>
      </li>
      <li>
        <Link to="/example-3">EXAMPLE-3 Redirects (Auth)</Link>
      </li>
      <li>
        <Link to="/example-4">EXAMPLE-4 Custom Link</Link>
      </li>
      <li>
        <Link to="/example-5">EXAMPLE-5 Preventing Transitions</Link>
      </li>
      <li>
        <Link to="/example-6">EXAMPLE-6 No Match( 404 )</Link>
      </li>
      <li>
        <Link to="/example-7">EXAMPLE-7 Recursive Paths</Link>
      </li>
    </ol>
  )
}
