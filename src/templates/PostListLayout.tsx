import React, { FC } from 'react'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { PostListItemFragment } from 'generated/graphql'
import PostList from '../components/PostList'

const useStyles = makeStyles(() => {
  return {
    root: {
      width: '100%',
      position: 'relative',
      backgroundColor: 'white',
    },
  }
})

interface PostListLayoutProps {
  posts: Array<PostListItemFragment>
}

const PostListLayout: FC<PostListLayoutProps> = ({ posts }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <PostList posts={posts} />
      </Container>
    </Box>
  )
}

export default PostListLayout
