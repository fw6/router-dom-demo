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
import ExampleEight from './examples/example-8'
import ExampleNine from './examples/example-9'
import ExampleTen from './examples/example-10'
import ExampleEleven from './examples/example-11'
import ExampleTwelve from './examples/example-12'
import ExampleFourteen from './examples/example-14'

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
          <Route path="/example-8" component={ExampleEight} />
          <Route path="/example-9" component={ExampleNine} />
          <Route path="/example-10" component={ExampleTen} />
          <Route path="/example-11" component={ExampleEleven} />
          <Route path="/example-12" component={ExampleTwelve} />
          <Route
            path="/example-13"
            render={() => (
              <h3>You would use the StaticRouter for server-side rendering</h3>
            )}
          />
          <Route path="/example-14" component={ExampleFourteen} />
        </>
      </Router>
    )
  }
}
