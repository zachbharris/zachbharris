import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav>
    <div className="logo">
      <Link to="/">ZBH</Link>
    </div>
    <div className="contact">
      <a href="mailto:hi@zachbharris.com">Say Hello 👋</a>
    </div>
  </nav>
)

export default Header
