import React from 'react'
import { Box, Container, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PostListItem from '../components/PostListItem'

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

const BodyLayout = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <PostListItem />
        <Divider />
        <PostListItem />
        <Divider />
        <PostListItem />
        <Divider />
        <PostListItem />
      </Container>
    </Box>
  )
}

export default BodyLayout
