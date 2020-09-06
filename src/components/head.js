import React from 'react'
import { Helmet } from 'react-helmet'
imprt { useStaticQuery, graphQL}

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <Helmet title={`$title} | ${data.site.siteMetadata.title}`} />
  )
}

export default Head
