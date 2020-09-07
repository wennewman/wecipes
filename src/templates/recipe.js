import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

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
       <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <p>{props.data.markdownRemark.frontmatter.categories}</p>
            <p>{props.data.markdownRemark.frontmatter.author}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
       </Layout>
   )
}
export default Recipe
