/**
 * Gatsby node API: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createNodeField } = actions
  const PostLayout = path.resolve(`src/templates/PostLayout.tsx`)

  const result = graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 100
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "yyyy-MM-dd")
              slug
            }
            excerpt(pruneLength: 250)
            internal {
              content
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (result.data) {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        })
      }

      createPage({
        path: node.frontmatter.slug,
        component: PostLayout,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  }
}
