import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
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
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    '& p, a': {
      color: 'white',
    },
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
  const [headerClassName, setHeaderClassName] = useState<string>(null)

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <StaticQuery
          query={pageLayoutQueryDoc}
          render={data => (
            <>
              <Waypoint
                topOffset="-500px"
                onLeave={() => setHeaderClassName(classes.header)}
                onEnter={() => setHeaderClassName(null)}
              />
              <Header
                siteMetadata={data.site.siteMetadata}
                className={headerClassName}
              />
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
