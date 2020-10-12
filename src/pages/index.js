import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <p>Some profound words go here to describe the point of this website.  It's just recipes, not rocket science.  Some are not verified, just taken from a book from Mum</p>
      <p>The point of building the site was to learn <a href="https://www.gatsbyjs.com/" target = "_blank" rel="noreferrer">Gatsby</a>; this site is still under construction.</p>
      <span className="ed"><img alt="I'm Ed. I'm a scrap head. Look at the detritus. I've been sticking my head in places I ought not be sticking it. I have a stupid face." src="./scrapHead.jpg"/></span>
    </Layout>
  )
}

export default IndexPage
