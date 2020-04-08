import React from 'react'
import { Link } from 'react-router-dom'

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
      <fieldset key={type}>
        <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
        <input
          type="radio"
          id={type}
          value={type || ''}
          name="type"
          onChange={handleChange}
          checked={isChecked}
        />
      </fieldset>
    )
  })

  // returns JSX for the `PostForm` component, includes an input for each
  // attribute of `post` resource
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <fieldset>
        <label>Title: </label>
        <input
          type="text"
          placeholder="A descriptive title"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
      </fieldset>

      <fieldset>
        <label>Body Text: </label>
        <textarea
          value={post.text}
          name="text"
          onChange={handleChange}
          rows="5"
          cols="50"
        />
      </fieldset>

      <fieldset>
        <label>Resource Link: </label>
        <input
          type="text"
          placeholder="provide a URL"
          value={post.sourceUrl}
          name="sourceUrl"
          onChange={handleChange}
        />
      </fieldset>

      <fieldset className="radios">
        {typeJSX}
      </fieldset>

      <fieldset>
        <label>Location (Zip Code)</label>
        <input
          type="text"
          placeholder="enter zip code"
          value={post.zip}
          name="zip"
          pattern="[0-9]*"
          onChange={handleChange}
        />
      </fieldset>

      <button style={{ margin: '0 2px 10px' }} className="btn btn-secondary" type="submit">Submit</button>
      <Link to={cancelPath}>
        <button style={{ margin: '0 2px 10px' }} className="btn btn-secondary" >Cancel</button>
      </Link>
    </form>
  )
}

// exports component for use in `PostCreate` and `PostEdit`
export default PostForm
