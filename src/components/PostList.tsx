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
      {posts.map((post: PostListItemFragment, index: number) => (
        <React.Fragment key={post.id}>
          <PostListItem post={post} />
          {index !== posts.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  )
}

export default PostList
