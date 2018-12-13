import React from 'react'
import { Link, Route } from 'react-router-dom'

const Topic = ({ match }) => (
  <h3>
    Requested Params: <mark>{match.params.id}</mark>
  </h3>
)

export default ({ match }) => {
  return (
    <>
      <h2>Topices</h2>

      <ul>
        <li>
          <Link to={`${match.path}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v.state</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please Select a Topic</h3>}
      />
    </>
  )
}
