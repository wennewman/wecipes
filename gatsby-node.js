const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  //add slug to markdown nodes
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //get path to template
  const recipeTemplate = path.resolve('./src/templates/recipeTemplate.js')
  //use the graphql function and pass it the query as a string
  //this function returns a promise
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //create new pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: recipeTemplate,
      path: `/recipe/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
