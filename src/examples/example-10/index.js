import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

const About = () => <h2>About...</h2>
const Flutter = () => <h2>Flutter...</h2>
const User = ({ match }) => <h2>User: {match.params.user}</h2>

export default ({ match }) => (
  <>
    <ul>
      <li>
        <Link to={`${match.path}/about`}>
          About Us <mark>static</mark>
        </Link>
      </li>
      <li>
        <Link to={`${match.path}/flutter`}>
          Flutter <mark>static</mark>
        </Link>
      </li>
      <li>
        <Link to={`${match.path}/kim`}>
          Kim <mark>dynamic</mark>
        </Link>
      </li>
      <li>
        <Link to={`${match.path}/chris`}>
          Chris <mark>dynamic</mark>
        </Link>
      </li>
    </ul>

    <Switch>
      <Route path={`${match.path}/about`} component={About} />
      <Route path={`${match.path}/flutter`} component={Flutter} />
      <Route path={`${match.path}/:user`} component={User} />
    </Switch>
  </>
)
