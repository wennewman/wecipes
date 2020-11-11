import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Image from '../components/image'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <p>
        Some profound words go here to describe the point of this website. It's just recipes. Some are not verified,
        taken from a book that mum wrote out in her days in the nursing home.
      </p>
      <p>
        The point of building the site was to learn{' '}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
        ; the site is a work in progress, with more features being added as I learn (eg search, categorise, rate/review
        etc). I'm also still adding recipes. This is a completely unrelated image of Ed after sticking his head in a
        grave at the cemetery.
      </p>
      <Image />
    </Layout>
  )
}

export default IndexPage
