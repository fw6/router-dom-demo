import React from 'react'
import { Route, Link, Redirect, withRouter } from 'react-router-dom'

export default ({ match }) => (
  <>
    <AuthButton />
    <ul>
      <li>
        <Link to={`${match.path}/public`}>Public Page</Link>
      </li>
      <li>
        <Link to={`${match.path}/protected`}>Protected Page</Link>
      </li>
    </ul>

    <Route path={`${match.path}/public`} component={Public} />
    <Route path={`${match.path}/login`} component={Login} />
    <PrivateRoute
      match={match}
      path={`${match.path}/protected`}
      component={Protected}
    />
  </>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake asyn
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome! XIXI
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push('/example-3'))
          }}
        >
          Sign Out
        </button>
      </p>
    ) : (
      <p>You are not Logged in.</p>
    )
)

const PrivateRoute = ({ component: Component, match, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: match.path + '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const Public = () => <h3>Public.</h3>

const Protected = () => <h3>Protected.</h3>

class Login extends React.Component {
  state = { redirectToReferrer: false }

  login() {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    let { from } = this.props.location.state || {
      from: { pathname: '/example-3' }
    }

    let { redirectToReferrer } = this.state
    if (redirectToReferrer) return <Redirect to={from} />
    return (
      <>
        <p>You must log in to view the page at {from.pathname}.</p>
        <button onClick={() => this.login()}>log in</button>
      </>
    )
  }
}
