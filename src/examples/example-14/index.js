import React from 'react'
import { Link } from 'react-router-dom'

export default ({ location, match }) => {
  let params = new URLSearchParams(location.search)
  return (
    <>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link
            to={{ pathname: `${match.path}/account`, search: '?name=netflix' }}
          >
            Netflix
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${match.path}/account`,
              search: '?name=zillow-group'
            }}
          >
            Zillow Group
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: `${match.path}/account`, search: '?name=yahoo' }}
          >
            Yahoo
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${match.path}/account`,
              search: '?name=modus-create'
            }}
          >
            Modus Create
          </Link>
        </li>
      </ul>
      <Child name={params.get('name')} />
    </>
  )
}

const Child = ({ name }) => (
  <>
    {name ? (
      <h3>
        The <code>name</code> in the query string is '{name}'
      </h3>
    ) : (
      <h3>There is no name in the query string</h3>
    )}
  </>
)
