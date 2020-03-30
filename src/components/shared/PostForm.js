import React from 'react'
import { Link } from 'react-router-dom'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      type="text"
      placeholder="A descriptive title"
      value={post.title}
      name="title"
      onChange={handleChange}
    />

    <label>Body Text</label>
    <textarea
      value={post.text}
      name="text"
      onChange={handleChange}
    />

    <label htmlFor="need">Need</label>
    <input
      type="radio"
      id="need"
      value={post.type}
      name="type"
      onChange={handleChange}
    />
    <label htmlFor="offer">Offer</label>
    <input
      type="radio"
      id="offer"
      value={post.type}
      name="type"
      onChange={handleChange}
    />
    <label htmlFor="network">Network</label>
    <input
      type="radio"
      id="network"
      value={post.type}
      name="type"
      onChange={handleChange}
    />
    <label htmlFor="resource">Resource</label>
    <input
      type="radio"
      id="resource"
      value={post.type}
      name="type"
      onChange={handleChange}
    />
    <label htmlFor="action">Action</label>
    <input
      type="radio"
      id="action"
      value={post.type}
      name="type"
      onChange={handleChange}
    />
    <label htmlFor="misc">Misc/General</label>
    <input
      type="radio"
      id="misc"
      value={post.type}
      name="type"
      onChange={handleChange}
    />

    <label>Location (Zip Code)</label>
    <input
      type="text"
      placeholder="enter zip code"
      value={post.zip}
      name="zip"
      pattern="[0-9]*"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default PostForm
