import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import recipeStyles from './recipe.module.scss'


const RecipePage = () => {

        const data = useStaticQuery(graphql `
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            categories
                            description
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `)
    return (
    <Layout className={recipeStyles.recipeList}>
        <h1>Recipe</h1>
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return(
                    <li>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>Added on {edge.node.frontmatter.date}</p>
                        <p>{edge.node.frontmatter.categories}</p>
                        <p>{edge.node.frontmatter.description}</p> 
                    </li>
                )
            })}
        </ol>

    
    </Layout>
    )
    
}
export default RecipePage
