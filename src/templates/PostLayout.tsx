import React from 'react'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PageLayout from './PageLayout'

const useStyles = makeStyles({
  root: {
    '& p, h1, h2, h3': {
      fontFamily: 'Noto Sans KR',
    },
    '& h1, h2, h3': {
      fontWeight: 500,
    },
    '& .gatsby-resp-image-figcaption': {
      marginTop: 10,
    },
  },
})

const PostLayout = ({ pageContext }) => {
  const classes = useStyles()
  return (
    <PageLayout>
      <Container maxWidth="lg">
        <Box padding="30px 0">
          <div
            dangerouslySetInnerHTML={{ __html: pageContext.html }}
            className={classes.root}
          />
        </Box>
      </Container>
    </PageLayout>
  )
}

export default PostLayout
