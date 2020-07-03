import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import theme from '../../style/theme'

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

const pageLayoutQueryDoc = graphql`
  query PageLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const PageLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <StaticQuery
          query={pageLayoutQueryDoc}
          render={data => (
            <>
              <Header siteMetadata={data.site.siteMetadata} />
              <Box className={classes.body}>{children}</Box>
              <Footer siteMetadata={data.site.siteMetadata} />
            </>
          )}
        />
      </Box>
    </ThemeProvider>
  )
}

export default PageLayout
