import React from 'react'
import styled from 'styled-components'

const Post = styled.div``

// Post Content
const query = `
  {
    allFile(filter: {dir: {eq: "/Users/songhyeonji/toy/roseline_blog/src/posts"}}) {
      nodes {
        name
        relativePath
      }
    }
  }
`

export default () => {
  return <Post></Post>
}
