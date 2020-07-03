import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      '& img': {
        marginBottom: 0,
        width: '100%',
        maxHeight: 850,
        [theme.breakpoints.down('sm')]: {
          maxHeight: 650,
        },
      },
    },
  }
})

interface CoverImageBoxProps {
  fileName?: string
}

const CoverImageBox: FC<CoverImageBoxProps> = ({ fileName }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <img src={`./images/${fileName || 'bg-image.jpg'}`} />
    </Box>
  )
}

export default CoverImageBox
