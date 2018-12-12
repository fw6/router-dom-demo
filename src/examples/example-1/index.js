import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Topics from './pages/topics'

// import Default from './layout/default'
// import UserLayout from './layout/user'

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          {/* <Route path="/" component={Default} />
          <Route path="/user" component={UserLayout} /> */}
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
            <li>
              <Link to={`/topics/thisIsTopicId`}>主题列表</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/topics/:topicID" component={Topics} />
        </>
      </Router>
    )
  }
}

export default App
