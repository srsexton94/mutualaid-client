import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

const Layout = props => (
  <div>
    <Nav />

    {props.children}

    <Footer />
  </div>
)

export default Layout
