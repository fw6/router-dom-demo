import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function ParamsExaple({ match }) {
  return (
    <Router>
      <>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to={`${match.path}/netflix`}>Netflix</Link>
          </li>
          <li>
            <Link to={`${match.path}/zillow-group`}>Zillow Group</Link>
          </li>
          <li>
            <Link to={`${match.path}/yahoo`}>Yahoo</Link>
          </li>
          <li>
            <Link to={`${match.path}/modus-create`}>Modus Create</Link>
          </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Child} />
        <Route
          path={`${match.path}/order/:direction(asc|desc)`}
          component={ComponentWithRegExp}
        />
      </>
    </Router>
  )
}

function Child({ match }) {
  return <h3>ID: {match.params.id}</h3>
}

function ComponentWithRegExp({ match }) {
  return <h3>Only asc/desc are allowed: {match.params.direction}</h3>
}

export default ParamsExaple
