import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import messages from '../../AutoDismissAlert/messages'

import apiUrl from '../../../apiConfig'
import Layout from '../../shared/Layout'

const Needs = function (props) {
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

  const needsJSX = posts.map(post => {
    if (post.type === 'need') {
      return (
        <li key={post._id}>
          <p><Link to={`/posts/${post._id}`}>{post.title}</Link> ({post.zip})</p>
        </li>
      )
    }
  })

  return (
    <Layout>
      <h4>Needs</h4>
      <ul>
        {needsJSX}
      </ul>
    </Layout>
  )
}

export default Needs
