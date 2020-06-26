import React from 'react'

import BodyLayout from '../templates/BodyLayout'
import PostList from '../components/PostList'

export default () => {
  return (
    <div>
      <BodyLayout>
        <PostList />
      </BodyLayout>
    </div>
  )
}
