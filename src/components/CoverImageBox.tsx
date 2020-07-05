import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// @ts-ignore
import bgImage from '../../static/images/bg-image.jpg'

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      zIndex: -1,
      '& img': {
        marginBottom: 0,
        width: '100%',
        maxHeight: 900,
        [theme.breakpoints.down('sm')]: {
          maxHeight: 700,
        },
        [theme.breakpoints.down('xs')]: {
          maxHeight: 400,
        },
      },
    },
  }
})

const CoverImageBox = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <img src={bgImage} />
    </Box>
  )
}

export default CoverImageBox
