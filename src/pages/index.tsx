import React from 'react'

import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Cover from '../components/Cover'
import PostList from '../components/PostList'

// TODO: next.js
export default () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Cover />
      <PostList />
    </div>
  )
}
