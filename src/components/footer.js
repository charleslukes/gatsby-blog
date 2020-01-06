import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <div>Created by {data.site.siteMetadata.author} , copyright 2020</div>
    </footer>
  )
}

export default Footer
