import React from 'react'
import { Route, Link } from 'react-router-dom'

const routers = [
  {
    path: '/example-8/',
    exact: true,
    sidebar: () => <div>sidebar - Home!</div>,
    main: () => <h2>main - Home!</h2>
  },
  {
    path: '/example-8/bubblegun',
    sidebar: () => <div>sidebar - bubblegun</div>,
    main: () => <h2>main - Bubblegun!</h2>
  },
  {
    path: '/example-8/shoelaces',
    sidebar: () => <div>sidebar - Shoelaces!</div>,
    main: () => <h2>main - Shoelaces</h2>
  }
]

export default ({ match }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ padding: '10px', width: '40%', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to={match.path}>Home</Link>
        </li>
        <li>
          <Link to={`${match.path}/bubblegun`}>Bubblegun</Link>
        </li>
        <li>
          <Link to={`${match.path}/shoelaces`}>Shoelaces</Link>
        </li>
      </ul>

      {routers.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.sidebar}
        />
      ))}
    </div>
    <div style={{ flex: 1, padding: '10px' }}>
      {routers.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </div>
)
