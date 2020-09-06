const path = require('path')

module.exports.onCreateNode = ({node, actions }) => {

    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {

        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField( {
            node, 
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPages} = actions
    //get path to template
    const recipeTemplate = path.resolve('./src/templates/recipe.js')
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

    res.data.allMarkdownRemark.edges.forEach ((edge) => {
        createPage({
            component: recipeTemplate,
            path: `/recipe/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    //get markdown data
    //create new pages
}
