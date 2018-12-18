import React from 'react'
import uuid from 'uuid'
import { Switch, Link, Route } from 'react-router-dom'

const IMAGES = [
  { id: uuid(), index: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: uuid(), index: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: uuid(), index: 2, title: 'Tomato', color: 'Tomato' },
  { id: uuid(), index: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: uuid(), index: 4, title: 'Crimson', color: 'Crimson' }
]

// 这个栗子展示如何呈现两个不同的屏幕（或相同上下文中的相同屏幕）在同一url
// 在/gallery中展示/img内容

// 将同一个 location 传递到<Switch />，它将判断忽略路由的当前 location 并使用其他location代替
// 使用 'location state' 告诉程序用户想以modal转到 'img/:id'，而不是主页，保持画廊可见

// 通常， '/img/:id' 与画廊不匹配。所以为让两个screens都呈现出来，可保存旧的定位并将其传递给Switch

class ModelSwitch extends React.Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    let { location } = this.props

    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    let { location } = this.props

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )
    console.log(isModal, this.previousLocation, location)
    return (
      <>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/example-12" component={Home} />
          <Route path="/example-12/gallery" component={Gallery} />
          <Route path="/example-12/img/:id" component={ImageView} />
        </Switch>
        {isModal ? (
          <Route path={`/example-12/img/:id`} component={Modal} />
        ) : null}
      </>
    )
  }
}

const Home = ({ match }) => (
  <>
    <Link to={`${match.path}/gallery`}>Visit the Gallery</Link>
    <h2>Featured Images</h2>
    <ul>
      <li>
        <Link to={`${match.path}/img/${IMAGES[2].id}`}>Tomato</Link>
      </li>
      <li>
        <Link to={`${match.path}/img/${IMAGES[4].id}`}>Crimson</Link>
      </li>
    </ul>
  </>
)

const Gallery = () => (
  <>
    {IMAGES.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/example-12/img/${i.id}`,
          state: { modal: true }
        }}
      >
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </>
)

const ImageView = ({ match }) => {
  let image
  for (const iterator of IMAGES) {
    if (iterator.id === match.params.id) {
      image = iterator
    }
  }

  if (!image) return null

  return (
    <>
      <h3>{image.title}</h3>
      <Image color={image.color} />
    </>
  )
}

const Modal = ({ match, history }) => {
  let image
  for (const iterator of IMAGES) {
    if (iterator.id === match.params.id) {
      image = iterator
    }
  }
  if (!image) return null

  let back = e => {
    e.stopPropagation()
    history.goBack()
  }

  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .15)'
      }}
    >
      <div
        className="modal"
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444'
        }}
      >
        <h3>{image.title}</h3>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  )
}

const Thumbnail = ({ color }) => (
  <div style={{ width: 50, height: 50, backgroundColor: color }} />
)

const Image = ({ color }) => (
  <div style={{ width: '100%', height: 400, backgroundColor: color }} />
)

export default () => <Route component={ModelSwitch} />
