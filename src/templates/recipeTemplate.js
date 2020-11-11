import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import templateStyles from './template.module.scss'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "Do MMMM, YYYY")
        categories
        credit
        description
      }
      html
    }
  }
`
const Recipe = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <span className={templateStyles.categoryContainer}>
        {props.data.markdownRemark.frontmatter.categories.split(' ').map(category => (
          <p key={category}>{category}</p>
        ))}
      </span>
      <div className={templateStyles.divider}>...</div>
      <div className={templateStyles.metaContainer}>
        <p>
          <b>Some words:</b>
          {props.data.markdownRemark.frontmatter.description}
        </p>
        <p>
          <b>Added:</b> {props.data.markdownRemark.frontmatter.date}
        </p>
        <p>
          <b>Credit: </b>
          {props.data.markdownRemark.frontmatter.credit}
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    </Layout>
  )
}
export default Recipe
