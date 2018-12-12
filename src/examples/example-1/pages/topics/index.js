import React from 'react'

class Topics extends React.Component {
  render() {
    return (
      <p>
        Topics <mark>{`${this.props.match.params.topicID}`}</mark>
      </p>
    )
  }
}

export default Topics
