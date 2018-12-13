import React from 'react'
import { Link, Route, Prompt } from 'react-router-dom'

export default ({ match }) => (
  <>
    <ul>
      <li>
        <Link to={match.path}>Form</Link>
      </li>
      <li>
        <Link to={`${match.path}/one`}>One</Link>
      </li>
      <li>
        <Link to={`${match.path}/two`}>Two</Link>
      </li>
    </ul>

    <Route path={match.path} exact component={Form} />
    <Route path={`${match.path}/one`} render={() => <h3>One</h3>} />
    <Route path={`${match.path}/two`} render={() => <h3>Two</h3>} />
  </>
)

class Form extends React.Component {
  state = { isBlocking: false }

  render() {
    let { isBlocking } = this.state

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          e.target.reset()
          this.setState(() => ({
            isBlocking: false
          }))
        }}
      >
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />

        <p>
          Blocking ?{' '}
          {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>
        <p>
          <input
            size="50"
            placeholder="type something to block transition"
            onChange={e => {
              this.setState({
                isBlocking: e.target.value.length > 0
              })
            }}
          />
        </p>

        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    )
  }
}
