import React from 'react'

// templates
import BodyLayout from '../templates/BodyLayout'
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
