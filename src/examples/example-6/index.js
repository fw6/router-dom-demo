import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

export default ({ match }) => (
  <>
    <ul>
      <li>
        <Link to={match.path}>Home</Link>
      </li>
      <li>
        <Link to={`${match.path}/old-match`}>Old match, to be redirected</Link>
      </li>
      <li>
        <Link to={`${match.path}/will-match`}>Will Match</Link>
      </li>
      <li>
        <Link to={`${match.path}/will-not-match`}>Will not Match</Link>
      </li>
      <li>
        <Link to={`${match.path}/also/will/not/match`}>
          Also Will Not Match
        </Link>
      </li>
    </ul>

    <Switch>
      <Route exact path={match.path} component={Home} />
      <Redirect
        from={`${match.path}/old-match`}
        to={`${match.path}/will-match`}
      />
      <Route path={`${match.path}/will-match`} component={WillMatch} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

const Home = () => (
  <p>
    {' '}
    A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{' '}
    that matches. A <code>&lt;Route></code> with no <code>path</code> always
    matches.
  </p>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
  <h3>
    No Match for <code>{location.pathname}</code>
  </h3>
)
