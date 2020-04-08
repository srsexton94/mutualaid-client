import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// allows for pop up messages upon action success or failure
import messages from '../AutoDismissAlert/messages'
// uses the URL set in config
import apiUrl from '../../apiConfig'
// uses the basic form for `Post` views in the shared folder
import PostForm from '../shared/PostForm'

// creates a component for `Edit Post` view
const PostEdit = function (props) {
  // declares state variables `post` and `updated` using React's "Hooks"
  const [post, setPost] = useState({
    title: '',
    text: '',
    type: '',
    zip: ''
  })
  const [updated, setUpdated] = useState(false)

  // use `useEffect` to run after completed render
  // makes axios GET request and sets the state variable `post`, or err msgAlert
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

  // this method sets the `post` state variable to the form values as they
  // are updated by the user
  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedPost = Object.assign({ ...post }, updatedField)

    setPost(editedPost)
  }

  const handleSubmit = event => {
    event.preventDefault() // prevents page refresh upon submit

    // makes an axios PATCH request with input values, requiers authorization
    // sets state variable `updated` upon succes
    // displays error msgAlert upon failure
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

  // if the post has been updated, redirect user to that post's `show` view
  if (updated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />
  }

  // returns JSX for the 'edit post' view, uses base PostForm imported above
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

// exports the component for use in `App`
export default PostEdit
