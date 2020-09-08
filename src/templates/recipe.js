import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import recipeStyles from '../pages/recipe.module.scss';

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (
            fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
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
                <span className={recipeStyles.categoryContainer}> 
                { props.data.markdownRemark.frontmatter.categories.split(' ').map(category => 
                    <p className={ recipeStyles.category }><span>{ category }</span></p>) } 
                </span>
            <p>{props.data.markdownRemark.frontmatter.credit}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
       </Layout>
   )
}
export default Recipe
