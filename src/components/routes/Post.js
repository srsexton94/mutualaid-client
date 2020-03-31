import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Post = (props) => {
  const [post, setPost] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}`)
      .then(res => setPost(res.data.post))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/posts/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
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
  if (props.user) {
    if (props.user._id === post.owner) {
      authJSX = (
        <div>
          <button onClick={destroy}>Delete Post</button>
          <Link to={`/posts/${props.match.params.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      )
    }
  }

  return (
    <Layout>
      <h4>{post.title}</h4>
      <p>{post.text}</p>
      <p>Located in: {post.zip}</p>
      {authJSX}
      <Link to="/posts">Back to all posts</Link>
    </Layout>
  )
}

export default Post
