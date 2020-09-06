import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (
            fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            date(formatString: "Do, MMMM, YYYY")
            categories
            author
            description
        }
        html
       }
    }
`
const Recipe = (props) => {
   return (
       <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <p>{props.data.markdownRemark.frontmatter.categories}</p>
            <p>{props.data.markdownRemark.frontmatter.author}</p>
            <div dangerouslySetInnerHTML={{___html: props.data.markdownRemark.frontmatter.html}}</div>
       </Layout>
   )
}
export default Recipe
