import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

import { IndexPageQuery } from 'generated/graphql'
import CoverImageBox from '../components/CoverImageBox'
import PageLayout from '../templates/PageLayout'
import PostListLayout from '../templates/PostListLayout'
import { isSMDown } from '../style/utils'

interface IndexPageProps {
  data: IndexPageQuery
}

const IndexPage: FC<IndexPageProps> = ({ data }) => {
  const posts = data?.allMarkdownRemark?.edges.map(edge => edge.node)
  const parallaxY = isSMDown() ? [60, -100] : [0, -100]
  return (
    <ParallaxProvider>
      <div>
        <PageLayout>
          <CoverImageBox />
          <Parallax y={parallaxY} tagOuter="figure">
            <PostListLayout posts={posts} />
          </Parallax>
        </PageLayout>
      </div>
    </ParallaxProvider>
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
