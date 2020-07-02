import React from 'react'
import { graphql } from 'gatsby'
import PageLayout from '../templates/PageLayout'
import BodyLayout from '../templates/BodyLayout'

export default ({ data }) => {
  return (
    <div>
      <PageLayout>
        <BodyLayout />
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
