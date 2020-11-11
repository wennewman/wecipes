import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact.</h1>
      <p>
        You can contact me via Insta{' '}
        <a href="https://youtu.be/cHQoxcfISFE?t=8" rel="noreferrer" target="_blank">
          @nuwms
        </a>
        , but you know who I am and how to find me 🚄.
      </p>
    </Layout>
  )
}

export default ContactPage
