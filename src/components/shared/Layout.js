import React from 'react'

// imports custom components
import Nav from './Nav'
import Footer from './Footer'

// creates a component for base page layout
const Layout = props => (
  <div className="layout">
    <Nav />

    {props.children}

    <Footer />
  </div>
)

// exports component for use in `Posts`
export default Layout
