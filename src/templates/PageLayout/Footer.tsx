import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    borderTop: '1px solid #ddd',
    padding: 20,
  },
  footerContent: {},
})

interface FooterProps {
  siteMetadata?: any
}

const Footer = (props: FooterProps) => {
  const { siteMetadata } = props
  console.log('siteMetadata', siteMetadata)
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Box className={classes.root}>
        <Box className={classes.footerContent}>
          <Typography>sdff</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
