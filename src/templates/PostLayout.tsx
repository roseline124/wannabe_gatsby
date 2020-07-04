import React from 'react'
import { Box, Container } from '@material-ui/core'
import PageLayout from './PageLayout'

const PostLayout = ({ pageContext }) => {
  return (
    <PageLayout>
      <Container maxWidth="lg">
        <Box padding="30px 0">
          <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
        </Box>
      </Container>
    </PageLayout>
  )
}

export default PostLayout
