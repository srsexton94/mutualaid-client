import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// These options display only when a user is signed in
const authenticatedOptions = (
  <Fragment>
    <Nav.Link className="header-link" href="#create-post">Create a Post</Nav.Link>
    <Nav.Link className="header-link" href="#change-password">Change Password</Nav.Link>
    <Nav.Link className="header-link" href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

// These options display only when not signed in
const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className="header-link" href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link className="header-link" href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// These options display when both signed in and not
const alwaysOptions = (
  <Fragment>
    <Nav.Link className="header-link" href="#/">Home</Nav.Link>
    <Nav.Link className="header-link" href="#posts">View Posts</Nav.Link>
  </Fragment>
)

// returns JSX for `Header`, choosing menu items based on passed `user` parameter
const Header = ({ user }) => (
  <Navbar className="header-main" bg="primary" variant="dark" expand="md">
    <Navbar.Brand className="header-text" href="#">
      Mutual Aid, Dual Power
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

// Export component for use in `App`
export default Header
