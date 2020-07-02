/**
 * Gatsby node API: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createNodeField } = actions
  const PostLayout = path.resolve(`src/templates/PostLayout.tsx`)

  const result = await graphql(`
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
              date(formatString: "yyyy년 MM월 DD일")
              slug
              category
            }
            excerpt(pruneLength: 700)
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
        createNodeField({
          node,
          name: `category`,
          value: category,
        })
      }

      const category = node.frontmatter.category
      const slug = node.frontmatter.slug
      const path = category ? `/${category}/${slug}` : `/${slug}`
      createPage({
        path,
        component: PostLayout,
        context: {
          slug,
          category,
        },
      })
    })
  }
}
