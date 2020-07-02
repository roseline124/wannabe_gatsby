import React, { FC } from 'react'
import { Divider } from '@material-ui/core'
import { PostListItemFragment } from 'generated/graphql'
import PostListItem from '../components/PostListItem'

interface PostListProps {
  posts: Array<PostListItemFragment>
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post: PostListItemFragment) => (
        <React.Fragment key={post.id}>
          <PostListItem post={post} />
          <Divider />
        </React.Fragment>
      ))}
    </>
  )
}

export default PostList
