import React, { FC } from 'react'
import { Divider } from '@material-ui/core'
import PostListItem from '../components/PostListItem'

interface PostListProps {
  postList?: any[]
}

const PostList: FC<PostListProps> = ({ postList }) => {
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
