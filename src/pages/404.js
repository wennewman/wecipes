import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page not found" />
      <h1>Ooof! The page you are after insn't here</h1>
      <p>Where it has gone, is not quite clear</p>
      <p>
        <Link to="/">Here is a link to get you back home</Link>
      </p>
      <p>If you want to complain, you won't be alone </p>
      <p>...pretty sure nowt will be done about it </p>
    </Layout>
  )
}
export default NotFound
