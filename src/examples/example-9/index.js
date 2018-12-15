import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Redirect, Switch, Link, Route } from 'react-router-dom'
import styles from './styles'

export default ({ match }) => (
  <div className="example-9">
    <Route
      render={({ location }) => (
        <div style={styles.fill}>
          <Route
            exact
            path={match.path}
            render={() => <Redirect to={`${match.path}/hsl/10/90/50`} />}
          />

          <ul style={styles.nav}>
            <NavLink to={`${match.path}/hsl/10/90/50`}>Red</NavLink>
            <NavLink to={`${match.path}/hsl/120/100/40`}>Green</NavLink>
            <NavLink to={`${match.path}/rgb/33/150/243`}>Blue</NavLink>
            <NavLink to={`${match.path}/rgb/240/98/146`}>Pink</NavLink>
          </ul>

          <div style={styles.content}>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch>
                  <Route
                    exact
                    path={`${match.path}/hsl/:h/:s/:l`}
                    component={HSL}
                  />
                  <Route
                    exact
                    path={`${match.path}/rgb/:r/:g/:b`}
                    component={RGB}
                  />
                  <Route render={() => <h2>example-9 Not Found</h2>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      )}
    />
  </div>
)

const NavLink = props => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }} />
  </li>
)

const RGB = ({ match: { params } }) => (
  <div
    style={{
      ...styles.fill,
      ...styles.rgb,
      backgroundColor: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}
  >
    RGB(
    {params.r}, {params.g}, {params.b})
  </div>
)

const HSL = ({ match: { params } }) => (
  <div
    style={{
      ...styles.fill,
      ...styles.hsl,
      backgroundColor: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}
  >
    HSL(
    {params.h}, {params.s}
    %, {params.l}
    %)
  </div>
)
