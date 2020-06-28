import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    paddingBottom: 50,
    width: '100%',
    position: 'relative',
  },
})

const BodyLayout = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography>sdlkfjksldjfkjl</Typography>
      </Container>
    </Box>
  )
}

export default BodyLayout
