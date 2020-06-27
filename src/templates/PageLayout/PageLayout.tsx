import React from 'react'

import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { StaticQuery } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import { siteMetaDataQueryDoc } from '../../pages/index'

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  },
  body: {
    flexGrow: 1,
  },
})

const PageLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <StaticQuery
        query={siteMetaDataQueryDoc}
        render={data => (
          <>
            <Header siteMetadata={data.site.siteMetadata} />
            <Container maxWidth="lg" className={classes.body}>
              {children}
            </Container>
            <Footer />
          </>
        )}
      />
    </Box>
  )
}

export default PageLayout
