import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
import PostForm from '../shared/PostForm'

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
      .catch(err => {
        props.msgAlert({
          heading: 'Error, did not submit: ' + err.message,
          message: messages.generalFailure,
          variant: 'danger'
        })
      })
  }

  if (createdPostId) {
    return <Redirect to={`/posts/${createdPostId}`} />
  }

  return (
    <section className="post-create">
      <h2>Create a Post</h2>
      <PostForm
        post={post}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </section>
  )
}

export default PostCreate
