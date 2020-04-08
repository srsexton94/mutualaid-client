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
      <div className="show-buttons">
        <button className="btn btn-outline-danger btn-sm" onClick={destroy}>Delete Post</button>
        <Link to={`/posts/${props.match.params.id}/edit`}>
          <button className="btn btn-outline-secondary btn-sm">Edit Post</button>
        </Link>
      </div>
    )
  }

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

export default Post
