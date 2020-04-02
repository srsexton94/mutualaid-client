import React from 'react'
import { Link } from 'react-router-dom'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => {
  const types = ['need', 'offer', 'network', 'action', 'misc']

  const typeJSX = types.map(type => {
    let isChecked = false
    if (type === post.type) {
      isChecked = true
    }

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

export default PostForm
