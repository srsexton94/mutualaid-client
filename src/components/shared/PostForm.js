import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// creates a component for the create/edit form
const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => {
  // declares an array of the different post 'types' (to match sort routes)
  const types = ['need', 'offer', 'network', 'action', 'misc']

  // declares a JSX variable for the radio buttons to be used in the form
  // maps through the different post types
  const typeJSX = types.map(type => {
    // initialized 'checked' value to false (presumes button was not checked)
    let isChecked = false
    // if editing a post, set `isChecked` value to true when it matches the post
    if (type === post.type) {
      isChecked = true
    }

    // returns JSX for radio button fieldset, adds to mapped array
    // `label` takes the type string and capitalizes the first letter
    // input takes a conditional to avoid oscillating b/w `controlled` and
    // `uncontrolled` input types (receives React warning)
    return (
      <Form.Group className="radio" key={type}>
        <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
        <Form.Control
          type="radio"
          id={type}
          value={type || ''}
          name="type"
          onChange={handleChange}
          checked={isChecked}
        />
      </Form.Group>
    )
  })

  // returns JSX for the `PostForm` component, includes an input for each
  // attribute of `post` resource
  return (
    <Form className="post-form" onSubmit={handleSubmit}>
      <Form.Group className="main-group">
        <label className="main-label">Title: </label>
        <Form.Control
          required
          type="text"
          placeholder="A descriptive title"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="main-group">
        <label className="main-label">Body Text: </label>
        <Form.Control
          as="textarea"
          value={post.text}
          name="text"
          onChange={handleChange}
          rows="5"
          cols="50"
        />
      </Form.Group>

      <Form.Group className="main-group">
        <label className="main-label">Resource Link: </label>
        <Form.Control
          required
          type="text"
          placeholder="provide a URL"
          value={post.sourceUrl}
          name="sourceUrl"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="main-group">
        <label className="main-label">Type of resource?</label>
        <Form.Group className="radios">
          {typeJSX}
        </Form.Group>
      </Form.Group>

      <Form.Group className="main-group">
        <label className="main-label">Location:</label>
        <Form.Control
          required
          type="text"
          placeholder="enter zip code"
          value={post.zip}
          name="zip"
          pattern="[0-9]*"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          If it&apos;s a regional resource, try to approximate.
        </Form.Text>
        <Form.Text className="text-muted">
          If you don&apos;t know, or it&apos;s remote, please feel free to enter `0`.
        </Form.Text>
      </Form.Group>

      <Button
        variant="info"
        type="submit"
        size="lg"
      >
        Submit
      </Button>
      <Link to={cancelPath}>
        <Button
          variant="secondary"
          size="lg"
        >
          Cancel
        </Button>
      </Link>
    </Form>
  )
}

// exports component for use in `PostCreate` and `PostEdit`
export default PostForm
