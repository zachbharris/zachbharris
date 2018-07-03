import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav>
    <Link className="logo link black" to="/"><h1>ZBH</h1></Link>
    <a className="contact btn btn-header purple bg-purple white" href="mailto:hi@zachbharris.com">Say Hello</a>
  </nav>
)

export default Header
