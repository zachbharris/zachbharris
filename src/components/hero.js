import React from 'react'
import Link from 'gatsby-link'

const Hero = ({ heroTitle, heroDesc, heroLink }) => (
  <section name="hero" className="hero">
    <span className="tag white">latest project</span>
    <h1 className="title white">{heroTitle}</h1>
    <p className="desc white">{heroDesc}</p>
    <a className="link white" href={heroLink} target="_blank" rel="noopener noreferrer">visit project →</a>
  </section>
)

export default Hero
