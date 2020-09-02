import React from 'react';

import Layout from '../components/layout';
import recipeStyles from './recipe.module.scss'


const RecipePage = () => {

    return (
    <Layout className={recipeStyles.recipeList}>
        <h1>Recipe</h1>
        <p>Recipes will show up here later on</p>
    </Layout>
    )
    
}
export default RecipePage
