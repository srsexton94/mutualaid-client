import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import PostForm from '../shared/PostForm'
import Layout from '../shared/Layout'

const PostEdit = function (props) {
  const [post, setPost] = useState({
    title: '',
    text: '',
    label: '',
    zip: ''
  })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}`)
      .then(res => setPost(res.data.post))
      .catch(console.error)
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
      data: post
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <PostForm
        post={post}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/posts/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default PostEdit
