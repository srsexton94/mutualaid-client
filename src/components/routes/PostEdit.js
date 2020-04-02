import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
import PostForm from '../shared/PostForm'

const PostEdit = function (props) {
  const [post, setPost] = useState({
    title: '',
    text: '',
    type: '',
    zip: ''
  })
  const [updated, setUpdated] = useState(false)

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

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedPost = Object.assign({ ...post }, updatedField)

    setPost(editedPost)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/posts/${props.match.params.id}`,
      method: 'PATCH',
      data: { post: post },
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => setUpdated(true))
      .catch(err => {
        props.msgAlert({
          heading: 'Error, did not submit: ' + err.message,
          message: messages.generalFailure,
          variant: 'danger'
        })
      })
  }

  if (updated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />
  }

  return (
    <section className="post-edit">
      <h2>Edit &apos;{post.title}&apos;</h2>
      <PostForm
        post={post}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/posts/${props.match.params.id}`}
      />
    </section>
  )
}

export default PostEdit
