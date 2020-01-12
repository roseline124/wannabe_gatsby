import React from 'react'

// layouts
import BodyLayout from '../layouts/BodyLayout'
// components
import Title from '../components/Title'
import PostList from '../components/PostList'

export default () => {
  return (
    <div>
      <BodyLayout>
        <Title />
        <PostList />
      </BodyLayout>
    </div>
  )
}
