import React from 'react'
import { graphql } from 'gatsby'
import PageLayout from '../templates/PageLayout'
import PostListLayout from '../templates/PostListLayout'

export default ({ data }) => {
  return (
    <div>
      <PageLayout>
        <PostListLayout />
      </PageLayout>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
          }
          internal {
            type
          }
        }
      }
    }
  }
`
