import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
 
    return (
    <div>
        <h1>About Wecipes</h1>
        <p>I'm the author of most of these recipes unless credited otherwise.  I'm a travelled home cook who takes inspiration from whatever is going on around me.</p>
        <p>I'm a relentless feeder, so I take food with me wherever I go, and am often asked for the recipe of what I have brought.  As I don't ever use recipes, I struggle and cannot be bothered to write them out for peeps; hence this site. </p>
        <p>I also have a precious book that mum wrote out for me when she was confined to the nursing home; mostly baked family favourites.  I haven't tried them all, but have noted as much on the recipe if this is the case.</p>
        <p>Once I figure out something, I like to refine it, and I will also note if the recipe is a corker.</p>
        <p>If you would like to add a recipe or contact me about any of the content on the site<Link to="/contact"> contact me.</Link></p>
    </div>
    )
}

export default AboutPage
