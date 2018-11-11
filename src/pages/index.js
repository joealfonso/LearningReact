import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Headline for my site</h1>
    <p>Some paragraph text.</p>
    <p>Aaaaaand another line of text. </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
