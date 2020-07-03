import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { BG_IMAGE_PATH } from '../constants/metadata'

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
      },
    },
  }
})

const CoverImageBox = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <img src={BG_IMAGE_PATH} />
    </Box>
  )
}

export default CoverImageBox
