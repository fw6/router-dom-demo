import React from 'react'
import { Route, Link } from 'react-router-dom'

const PEEPS = [
  {
    id: 0,
    name: 'LiHua',
    friends: [1, 2, 3]
  },
  {
    id: 1,
    name: 'Goudan',
    friends: [5, 2, 3]
  },
  {
    id: 2,
    name: 'ZhaoSi',
    friends: [0, 4, 5]
  },
  {
    id: 3,
    name: 'Lisa',
    friends: [1, 3, 4]
  },
  {
    id: 4,
    name: 'Lily',
    friends: [2, 3, 5]
  },
  {
    id: 5,
    name: 'HanMeimei',
    friends: [0, 1, 4]
  }
]

const find = id => PEEPS.find(p => p.id === parseInt(id))

export default ({ match }) => {
  match.params.id = 0
  return <Person match={match} />
}

function Person({ match }) {
  let person = find(match.params.id)
  return (
    <>
      <h3>
        {person.name}
        's Friends
      </h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </>
  )
}
