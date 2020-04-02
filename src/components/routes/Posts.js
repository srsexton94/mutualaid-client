import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Posts = function (props) {
  const [posts, setPosts] = useState([])

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

  let postsJSX
  if (props.type === 'all') {
    postsJSX = posts.map(post => (
      <li key={post._id}>
        <p><Link to={`/posts/${post._id}`}>{post.title}</Link> ({post.zip})</p>
      </li>
    ))
  } else if (props.type) {
    postsJSX = posts.map(post => {
      if (post.type === props.type) {
        return (
          <li key={post._id}>
            <p><Link to={`/posts/${post._id}`}>{post.title}</Link> ({post.zip})</p>
          </li>
        )
      }
    })
  }

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

export default Posts
