import React from 'react'
import { Route, Link } from 'react-router-dom'

export default ({ match }) => (
  <>
    <OldSchoolMenuLink
      activeOnlyWhenExact={true}
      to={match.path}
      label="Example-4 Home"
    />
    <OldSchoolMenuLink to={`${match.path}/about`} label="Example-4 About" />
    <hr />
    <Route exact path={match.path} component={Home} />
    <Route path={`${match.path}/about`} component={About} />
  </>
)

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? 'active' : ''}>
        {match ? '$ ' : ''}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
)

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
