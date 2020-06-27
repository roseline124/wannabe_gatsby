import React from 'react'

import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Header from './Header'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

const PageLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Header />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export default PageLayout
