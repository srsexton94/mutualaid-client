import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// allows for pop up messages upon action success or failure
import messages from '../AutoDismissAlert/messages'
// uses the URL set in config
import apiUrl from '../../apiConfig'
// uses the basic form for `Post` views in the shared folder
import PostForm from '../shared/PostForm'

// creates component for the 'make a post' view
const PostCreate = props => {
  // declares state variables `post` and `createdPostId` using React's "Hooks"
  const [post, setPost] = useState({ title: '', text: '', type: '', zip: '' })
  const [createdPostId, setCreatedPostId] = useState(null)

  // this method sets the `post` state variable to the form values as they
  // are updated by the user
  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedPost = Object.assign({ ...post }, updatedField)

    setPost(editedPost)
  }

  const handleSubmit = event => {
    event.preventDefault() // prevents page refresh upon submit

    // makes an axios POST request with input values, requiers authorization
    // sets post `_id` upon success, displays error msgAlert upon failure
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

  // if the post has been created, redirect user to that post's `show` view
  if (createdPostId) {
    return <Redirect to={`/posts/${createdPostId}`} />
  }

  // returns JSX for the 'create post' view, uses base PostForm imported above
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

// exports the component for use in `App`
export default PostCreate
