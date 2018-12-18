import React from 'react'
import { StaticRouter, Route } from 'react-router-dom'

// 需要SSR

const RouteStatus = props => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = props.statusCode
      }
      return <div>{props.children}</div>
    }}
  />
)

const PrintContext = props => (
  <p>
    Static Context: <mark>{JSON.stringify(props.staticContext)}</mark>
  </p>
)

class StaticRouterExample extends React.Component {
  staticContext = {}

  render() {
    return (
      <StaticRouter location="/example-13" context={this.staticContext}>
        <>
          <RouteStatus statusCode={404}>
            <p>Route with statusCode</p>
            <PrintContext staticContext={this.staticContext} />
          </RouteStatus>
        </>
      </StaticRouter>
    )
  }
}
export default StaticRouterExample
