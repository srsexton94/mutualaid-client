import React from 'react'
import { NavLink } from 'react-router-dom'

// TODO: insert links to sorted lists of posts later
const Nav = () => (
  <nav className="posts-nav">
    <NavLink to='/posts'>All</NavLink>
    <NavLink to='/needs'>Needs</NavLink>
    <NavLink to='/offers'>Offers</NavLink>
    <NavLink to='/networks'>Networks</NavLink>
    <NavLink to='/actions'>Actions</NavLink>
    <NavLink to='/misc'>General/Misc.</NavLink>
  </nav>
)

export default Nav
