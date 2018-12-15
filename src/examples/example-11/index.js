import React from 'react'
import { Route, Link } from 'react-router-dom'

export default ({ match }) => (
  <>
    <ul>
      <li>
        <Link to={`${match.path}/tacos`}>Tacos</Link>
      </li>
      <li>
        <Link to={`${match.path}/sandwiches`}>Sandwiches</Link>
      </li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </>
)

const Sandwiches = () => <h2>Sanadwiches</h2>
const Tacos = ({ routes, match }) => (
  <>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to={`${match.path}/bus`}>Bus</Link>
      </li>
      <li>
        <Link to={`${match.path}/cart`}>Cart</Link>
      </li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </>
)

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

const routes = [
  {
    path: '/example-11/sandwiches',
    component: Sandwiches
  },
  {
    path: '/example-11/tacos',
    component: Tacos,
    routes: [
      {
        path: '/example-11/tacos/bus',
        component: Bus
      },
      {
        path: '/example-11/tacos/cart',
        component: Cart
      }
    ]
  }
]

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
)
