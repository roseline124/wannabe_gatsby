import React from 'react'
import { graphql } from 'gatsby'

import PageLayout from '../templates/PageLayout'
import BodyLayout from '../templates/BodyLayout'
import PostList from '../components/PostList'

export const siteMetaDataQueryDoc = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

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
