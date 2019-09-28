import React from 'react'
import styled from 'styled-components'

const Post = styled.div`
  display: block;

  h1 {
    font-size: 2rem;
  }
`

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
  return (
    <Post>
      <div>
        <h1>title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          asperiores eveniet, rerum unde, necessitatibus quo et culpa
          consectetur ab assumenda, ad cumque voluptatem doloremque molestias
          labore laboriosam recusandae animi fugiat!
        </p>
      </div>
    </Post>
  )
}
