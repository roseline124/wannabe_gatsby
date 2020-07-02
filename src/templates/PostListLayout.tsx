import React from 'react'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import PostList from '../components/PostList'
// import PostLayout, { pageQuery } from '../templates/PostLayout'

const useStyles = makeStyles(theme => {
  return {
    root: {
      padding: '50px 0',
      width: '100%',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        padding: '20px 0',
      },
    },
  }
})

// https://www.gatsbyjs.org/docs/page-query/
const PostListLayout = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        {/* <StaticQuery
          query={pageQuery}
          render={data => <PostLayout data={data} />}
        /> */}
        sdf
      </Container>
    </Box>
  )
}

export default PostListLayout
