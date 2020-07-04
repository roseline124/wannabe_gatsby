import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { Box } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { graphql, StaticQuery } from 'gatsby'

import Footer from '../components/Footer'
import Header from '../components/Header'
import theme from '../style/theme'
import { isSMDown } from '../style/utils'

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
    '& p, a, span': {
      color: 'white',
    },
  },
  body: {
    flexGrow: 1,
  },
})

const PageLayoutQuery = graphql`
  query PageLayout {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

interface PageLayoutProps {
  includeHeader?: boolean
  includeFooter?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  includeHeader = true,
  includeFooter = true,
}) => {
  const classes = useStyles()
  const [headerClassName, setHeaderClassName] = useState<string>(null)
  const topOffset = isSMDown() ? '-150px' : '-500px'

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <StaticQuery
          query={PageLayoutQuery}
          render={data => {
            const siteMetadata = data.site.siteMetadata
            return (
              <>
                {includeHeader && (
                  <>
                    <Waypoint
                      topOffset={topOffset}
                      onLeave={() => setHeaderClassName(classes.header)}
                      onEnter={() => setHeaderClassName(null)}
                    />
                    <Header
                      siteMetadata={siteMetadata}
                      className={headerClassName}
                    />
                  </>
                )}

                <Box className={classes.body}>{children}</Box>
                {includeFooter && <Footer siteMetadata={siteMetadata} />}
              </>
            )
          }}
        />
      </Box>
    </ThemeProvider>
  )
}

export default PageLayout
