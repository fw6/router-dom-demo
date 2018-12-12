import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'

import ExampleOne from './examples/example-1'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Home />

          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/example-1" component={ExampleOne} />
        </>
      </Router>
    )
  }
}
