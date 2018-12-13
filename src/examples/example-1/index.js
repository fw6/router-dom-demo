import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './header'

import Home from './pages/home'
import About from './pages/about'
import Topics from './pages/topics'

export default ({ match }) => (
  <Router>
    <>
      <Header match={match} />
      <hr />
      <Route exact path={`${match.path}`} component={Home} />
      <Route path={`${match.path}/about`} component={About} />
      <Route path={`${match.path}/topics`} component={Topics} />
    </>
  </Router>
)
