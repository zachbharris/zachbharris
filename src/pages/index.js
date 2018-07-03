import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/hero'

const IndexPage = () => (
  <div>
    <Hero
      heroTitle="InTune"
      heroDesc="As a beginner guitarist learning different tunings is important and I wanted to create a tool that was simple and straight to the point."
      heroLink="https://intune.zachbharris.com"
    />
    <section name="work" className="work">
      <h2>Work</h2>
      <div className="items">
        <a className="btn purple outline-purple" href="https://mconnectedlab.com" target="_blank" rel="noopener noreferrer">M Connected Labs</a>
        <a className="btn purple outline-purple" href="http://covermissouri.org" target="_blank" rel="noopener noreferrer">Cover Missouri</a>
        <a className="btn purple outline-purple" href="http://emersontopquartile.com" target="_blank" rel="noopener noreferrer">Emerson Top Quartile</a>
        <a className="btn purple outline-purple" href="https://linxup.com" target="_blank" rel="noopener noreferrer">Linxup</a>
        <a className="btn purple outline-purple" href="https://awaregps.com" target="_blank" rel="noopener noreferrer">AwareGPS</a>
        <a className="btn purple outline-purple" href="https://commandgps.com" target="_blank" rel="noopener noreferrer">CommandGPS</a>
      </div>
    </section>
    <section name="projects" className="work">
      <h2>Personal Projects</h2>
      <div className="items">
        <a className="btn purple outline-purple" href="https://intune.zachbharris.com" target="_blank" rel="noopener noreferrer">InTune</a>
        <a className="btn purple outline-purple" href="https://strumeasy.com" target="_blank" rel="noopener noreferrer">StrumEasy</a>
        <a className="btn purple outline-purple" href="https://codepen.io/zachbharris/pen/mLgJOv" target="_blank" rel="noopener noreferrer">Twitch API</a>
      </div>
    </section>
  </div>
)

export default IndexPage
