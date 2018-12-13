import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'

import ExampleOne from './examples/example-1'
import ExampleTwo from './examples/example-2'
import ExampleThree from './examples/example-3'
import ExampleFour from './examples/example-4'
import ExampleFive from './examples/example-5'
import ExampleSix from './examples/example-6'
import ExampleSeven from './examples/example-7'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Home />
          <hr />

          <Route exact path="/" />
          <Route path="/example-1" component={ExampleOne} />
          <Route path="/example-2" component={ExampleTwo} />
          <Route path="/example-3" component={ExampleThree} />
          <Route path="/example-4" component={ExampleFour} />
          <Route path="/example-5" component={ExampleFive} />
          <Route path="/example-6" component={ExampleSix} />
          <Route path="/example-7" component={ExampleSeven} />
        </>
      </Router>
    )
  }
}
