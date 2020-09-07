import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
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
    <Layout >
      <Head title="Recipes"/>
        <h1>Recipes.</h1>
        <ol className={recipeStyles.recipeList}>
            {data.allMarkdownRemark.edges.map((edge) => {
                return(
                    <li className={recipeStyles.recipe}>
                        <Link to = {`/recipe/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>Added on {edge.node.frontmatter.date}</p>
                                <p>{edge.node.frontmatter.categories}</p>
                                <p>{edge.node.frontmatter.description}</p> 
                        </Link>            
                    </li>
                )
            })}
        </ol>

    
    </Layout>
    )
    
}
export default RecipePage
