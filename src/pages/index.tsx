import React, { FC } from 'react'
import { graphql } from 'gatsby'

import { IndexPageQuery } from 'generated/graphql'
import PageLayout from '../templates/PageLayout'
import PostListLayout from '../templates/PostListLayout'

interface IndexPageProps {
  data: IndexPageQuery
}

const IndexPage: FC<IndexPageProps> = ({ data }) => {
  const posts = data?.allMarkdownRemark?.edges.map(edge => edge.node)
  return (
    <div>
      <PageLayout>
        <PostListLayout posts={posts} />
      </PageLayout>
    </div>
  )
}

export default IndexPage

// https://www.gatsbyjs.org/docs/page-query/
// pageQuery에 넣어야 graphql 실행됨
export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
    ) {
      edges {
        node {
          # TODO: Use PostListItem Fragment
          id
          excerpt(pruneLength: 700)
          frontmatter {
            date(formatString: "yyyy년 MM월 DD일")
            slug
            title
            category
          }
          internal {
            content
          }
        }
      }
    }
  }
`
