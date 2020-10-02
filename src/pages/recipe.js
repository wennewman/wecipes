import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import recipeStyles from './recipe.module.scss'

const RecipePage = () => {

        const data = useStaticQuery(graphql `
        query {
            allMarkdownRemark (sort: {fields: [frontmatter___title], order: ASC}
            ){
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
        <ul className={recipeStyles.recipeList}>
            {data.allMarkdownRemark.edges.map((edge) => {
                const { fields, frontmatter: { title, description, categories = ' '}} = edge.node;
               // console.log(frontmatter, categories); 
                return(
                    <li className={ recipeStyles.recipe }>
                        <Link to = {`/recipe/${fields.slug}`}>
                                <h2>{ title }</h2>
                                    <span className={recipeStyles.categoryContainer}> 
                                    { categories.split(' ').map(category => 
                                     <p className={ recipeStyles.category }><span>{ category }</span></p>) } 
                                    </span>
                                <p>{ description }</p> 
                        </Link>            
                    </li>
                )
            })}
        </ul>

    
    </Layout>
    )
    
}
export default RecipePage
