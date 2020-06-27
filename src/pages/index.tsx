import React from 'react'

import PageLayout from '../templates/PageLayout'
import BodyLayout from '../templates/BodyLayout'
import PostList from '../components/PostList'

export default () => {
  return (
    <div>
      <PageLayout>
        <BodyLayout>
          <PostList />
        </BodyLayout>
      </PageLayout>
    </div>
  )
}
