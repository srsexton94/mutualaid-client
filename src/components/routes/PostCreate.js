import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import PostForm from '../shared/PostForm'
import Layout from '../shared/Layout'

const PostCreate = props => {
  const [post, setPost] = useState({ title: '', text: '', type: '', zip: '' })
  const [createdPostId, setCreatedPostId] = useState(null)

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedPost = Object.assign({ ...post }, updatedField)

    setPost(editedPost)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/posts`,
      method: 'POST',
      data: { post },
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => setCreatedPostId(res.data.post._id))
      .catch(console.error)
  }

  if (createdPostId) {
    return <Redirect to={`/posts/${createdPostId}`} />
  }

  return (
    <Layout>
      <h2>Create a Post</h2>
      <PostForm
        post={post}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  )
}

export default PostCreate
