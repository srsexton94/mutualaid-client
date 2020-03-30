import React from 'react'
// import Layout from '../shared/Layout'
import { NavLink } from 'react-router-dom'

const Home = () => (
  <section>
    <h4>Home Page</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur.</p>
    <NavLink to='/posts'>
      <button>View Posts</button>
    </NavLink>
  </section>
)

export default Home
