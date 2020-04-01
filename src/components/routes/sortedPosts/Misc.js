import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import messages from '../../AutoDismissAlert/messages'

import apiUrl from '../../../apiConfig'
import Layout from '../../shared/Layout'

const Misc = function (props) {
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

  const miscJSX = posts.map(post => {
    if (post.type === 'misc') {
      return (
        <li key={post._id}>
          <p><Link to={`/posts/${post._id}`}>{post.title}</Link> ({post.zip})</p>
        </li>
      )
    }
  })

  return (
    <Layout>
      <h4>General/Misc. Posts</h4>
      <ul>
        {miscJSX}
      </ul>
    </Layout>
  )
}

export default Misc
