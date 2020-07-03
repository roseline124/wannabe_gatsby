import React from 'react'
import { Box, Container, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { SiteSiteMetadata } from 'generated/graphql'
import { GITHUB_HOMEPAGE } from '../../constants/github'

const useStyles = makeStyles(theme => {
  return {
    root: {
      borderTop: '1px solid #ddd',
      padding: '20px 20px 40px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        padding: '20px 0',
      },
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 15,
      },
    },
    description: {
      fontSize: 15,
      fontWeight: 300,
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
    },
    githubIcon: {
      [theme.breakpoints.down('sm')]: {
        width: '40px !important',
        height: '40px !important',
      },
    },
  }
})

interface FooterProps {
  siteMetadata?: SiteSiteMetadata
}

// https://github.com/gatsbyjs/gatsby/issues/9882
const githubIconQuery = graphql`
  query githubIconQuery {
    githubIcon: file(relativePath: { eq: "icons/github-icon.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          base64
          src
          width
          height
          srcSet
        }
      }
    }
  }
`

const Footer = (props: FooterProps) => {
  const { siteMetadata } = props
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Box className={classes.root}>
        <Box>
          <Typography variant="h1" className={classes.title}>
            {siteMetadata?.title}
          </Typography>
          <Typography className={classes.description} variant="body1">
            {siteMetadata?.description}
          </Typography>
        </Box>
        <Box>
          <StaticQuery
            query={githubIconQuery}
            render={data => {
              return (
                <Link href={GITHUB_HOMEPAGE} target="_blank">
                  <Img
                    className={classes.githubIcon}
                    fixed={data?.githubIcon?.childImageSharp?.fixed}
                    alt={GITHUB_HOMEPAGE}
                  />
                </Link>
              )
            }}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
