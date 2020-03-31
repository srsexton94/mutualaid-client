import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'

const Post = (props) => {
  const [post, setPost] = useState(null)
  const [deleted, setDeleted] = useState(false)
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

  if (!post) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Post succesfully deleted!' } }
    } />
  }

  let authJSX
  if (props.user && (props.user._id === post.owner)) {
    authJSX = (
      <div>
        <button onClick={destroy}>Delete Post</button>
        <Link to={`/posts/${props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    )
  }

  return (
    <section>
      <h4>{post.title}</h4>
      <p>{post.text}</p>
      <p>Located in: {post.zip}</p>
      {authJSX}
      <Link to="/posts">Back to all posts</Link>
    </section>
  )
}

export default Post
