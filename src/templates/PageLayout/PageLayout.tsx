import React, { useState } from 'react'
import { withController, ParallaxContextValue } from 'react-scroll-parallax'
import { Waypoint } from 'react-waypoint'
import { Box } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import theme from '../../style/theme'
import { isSMDown } from '../../style/utils'
import { SiteSiteMetadata } from 'generated/graphql'

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

interface PageLayoutProps extends ParallaxContextValue {
  includeHeader?: boolean
  includeFooter?: boolean
  siteMetadata?: SiteSiteMetadata
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  parallaxController,
  siteMetadata,
  includeHeader = true,
  includeFooter = true,
}) => {
  const classes = useStyles()
  const [headerClassName, setHeaderClassName] = useState<string>(null)
  const handleLoad = () => parallaxController.update()
  const topOffset = isSMDown() ? '-150px' : '-500px'

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root} onLoad={handleLoad}>
        {includeHeader && (
          <>
            <Waypoint
              topOffset={topOffset}
              onLeave={() => setHeaderClassName(classes.header)}
              onEnter={() => setHeaderClassName(null)}
            />
            <Header siteMetadata={siteMetadata} className={headerClassName} />
          </>
        )}

        <Box className={classes.body}>{children}</Box>
        {includeFooter && <Footer siteMetadata={siteMetadata} />}
      </Box>
    </ThemeProvider>
  )
}

export default withController(PageLayout)
