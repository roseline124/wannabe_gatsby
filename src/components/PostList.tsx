import React, { FC } from 'react'
import { Divider } from '@material-ui/core'
import { graphql } from 'gatsby'
import PostListItem from '../components/PostListItem'

interface PostListProps {
  postList?: any[]
}

const PostListQueryDoc = graphql`
  query PostList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
`

const PostList = ({ data: allMarkdownRemark }) => {
  console.log(allMarkdownRemark?.edges)
  if (!postList?.length) return null

  return (
    <>
      {postList.map((post: any) => (
        <React.Fragment key={post.id}>
          <PostListItem />
          <Divider />
        </React.Fragment>
      ))}
    </>
  )
}

export default PostList
