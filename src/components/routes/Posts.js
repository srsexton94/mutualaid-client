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

  const postsJSX = posts.map(post => (
    <li key={post._id}>
      <Link to={`/posts/${post._id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Posts</h4>
      <ul>
        {postsJSX}
      </ul>
    </Layout>
  )
}

export default Posts
