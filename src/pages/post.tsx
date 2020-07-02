import React from 'react'
import PostLayout from '../templates/PostLayout'

const Post = ({ data }) => {
  console.log(data)
  return <PostLayout data={data} />
}

export default Post
