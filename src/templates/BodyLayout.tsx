import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const defaultTitle = 'title'
const defaultContent = 'content'

const useStyles = makeStyles({
  root: {
    padding: '50px 0',
  },
})

const BodyLayout = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <h1>{defaultTitle}</h1>
      <h1>{defaultContent}</h1>
    </Box>
  )
}

export default BodyLayout
