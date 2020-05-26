import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios'

// allows for pop up messages upon action success or failure
import messages from '../AutoDismissAlert/messages'
// uses the URL set in config
import apiUrl from '../../apiConfig'
// uses the basic page layout from shared folder
import Layout from '../shared/Layout'

// creates a component for the `index` view
const Posts = function (props) {
  // declares state `posts` variable using React's "Hooks"
  const [posts, setPosts] = useState([])

  // use `useEffect` to run after completed render
  // makes axios GET request and sets the state variable `post`, or err msgAlert
  useEffect(() => {
    axios(`${apiUrl}/posts`)
      .then(res => setPosts(res.data.posts))
      .catch(err => {
        props.msgAlert({
          heading: 'Could not load Posts: ' + err.message,
          message: messages.generalFailure,
          variant: 'danger'
        })
      })
  }, [])

  const zipFinder = zip => {
    const regex = /[a-zA-Z]/
    if (zip === '0') {
      return 'Remote/All Locations'
    } else if (regex.test(zip)) {
      return zip + ' - United Kingdom'
    } else {
      if (zip.length === 4) zip = `0${zip}`
      return zip + ' - United States'
    }
  }

  // writes JSX to display only posts matching the sort (ie post tabs)
  // does so by passing prop `type` in routes (in `App`)
  let postsJSX
  // if sort type is `all`, map over posts array and return <li> for each
  // otherwise, map over posts array and return <li> for each w/matching `type`
  if (props.type === 'all') {
    postsJSX = posts.reverse().map(post => (
      <li key={post._id}>
        <Link to={`/posts/${post._id}`}>
          <Card className="post-card">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{zipFinder(post.zip)}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Link>
      </li>
    ))
  } else if (props.type) {
    postsJSX = posts.reverse().map(post => {
      if (post.type === props.type) {
        return (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <Card className="post-card">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{zipFinder(post.zip)}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Link>
          </li>
        )
      }
    })
  }

  // returns JSX for the `index` view, uses base page layout imported above
  return (
    <Layout>
      <div className="posts">
        <h4>{props.type.charAt(0).toUpperCase() + props.type.slice(1)} Posts</h4>
        <ul>
          {postsJSX}
        </ul>
      </div>
    </Layout>
  )
}

// exports the component for use in `App`
export default Posts
