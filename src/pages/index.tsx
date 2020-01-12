import React from 'react'

// layouts
import BodyLayout from '../layouts/BodyLayout'
import PostLayout from '../layouts/PostLayout'
// components
import Title from '../components/Title'
import MainCover from '../components/MainCover'
import PostList from '../components/PostList'


export default () => {
  return (
    <div>
      <MainCover />

      <BodyLayout>
        <Title />
        <PostLayout>
          <PostList>
        </PostLayout>
      </BodyLayout>
    </div>
  )
}
