import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

// allows for pop up messages upon action success or failure
import messages from '../AutoDismissAlert/messages'
// uses the URL set in config
import apiUrl from '../../apiConfig'

// creates a component for post 'show' view (single resource)
const Post = (props) => {
  // declares state variables `post` and `deleted` using React's "Hooks"
  const [post, setPost] = useState(null)
  const [deleted, setDeleted] = useState(false)

  // use `useEffect` to run after completed render
  // makes axios GET request and sets the state variable `post`, or err msgAlert
  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}`)
      .then(res => setPost(res.data.post))
      .catch(err => {
        props.msgAlert({
          heading: 'Could not load Post: ' + err.message,
          message: messages.generalFailure,
          variant: 'danger'
        })
      })
  }, [])

  const destroy = () => {
    // makes axios DELETE request & sets state variable `deleted`, or err msgAlert
    axios({
      url: `${apiUrl}/posts/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(err => {
        props.msgAlert({
          heading: 'Delete Not Successful: ' + err.message,
          message: messages.generalFailure,
          variant: 'danger'
        })
      })
  }

  // if there is no post, display loading message to user
  if (!post) {
    return <p>Loading...</p>
  }

  // once the post is deleted the page redirects to 'view posts' page
  if (deleted) {
    return <Redirect to={
      { pathname: '/posts', state: { msg: 'Post succesfully deleted!' } }
    } />
  }

  // JSX for `edit` and `delete buttons`
  // to display only when the signed in user is the posts owner
  let authJSX
  if (props.user && (props.user._id === post.owner)) {
    authJSX = (
      <div className="show-buttons">
        <button className="btn btn-outline-danger btn-sm" onClick={destroy}>Delete Post</button>
        <Link to={`/posts/${props.match.params.id}/edit`}>
          <button className="btn btn-outline-secondary btn-sm">Edit Post</button>
        </Link>
      </div>
    )
  }

  // return JSX for an individual `post`
  // always includes title, text, 'located in', and 'back to all posts' button
  // includes 'more info' button if `post` has a link, authJSX if owned
  return (
    <section className="show-view">
      <h4>{post.title}</h4>
      <p>{post.text}</p>
      <p>Located in: {post.zip}</p>
      <div className="show-buttons">
        { post.sourceUrl ? <a rel="noreferrer noopener" target="_blank" href={post.sourceUrl}><button className="btn btn-info btn-sm">More Info</button></a> : ''}
        {authJSX}
        <Link to="/posts"><button className="btn btn-outline-dark btn-sm">Back to All Posts</button></Link>
      </div>
    </section>
  )
}

// returns component for use in `App`
export default Post
