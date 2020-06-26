import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Avatar, Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link, StaticQuery } from 'gatsby'

import { GITHUB_USER_NAME } from '../config'
import { siteMetaDataQueryDoc } from '../queries/sitemetaData'

const useStyles = makeStyles(() => {
  return {
    root: {
      width: '100%',
    },
    navBar: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      width: '100%',
    },
    navContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    linkItem: {
      padding: 10,
      color: '#333',
      '&:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
      },
      '&:hover': {
        color: 'grey',
      },
    },
    homeLink: {
      color: '#333',
      '&:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
      },
      '&:hover': {
        color: '#333',
      },
    },
    avatarImg: {
      marginBottom: 0,
    },
    avatar: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    avatarWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    title: { fontSize: 20 },
    description: {
      fontSize: 14,
    },
  }
})

const PageLayout = ({ children }) => {
  const classes = useStyles()
  const [avatarURL, setAvatarURL] = useState(null)

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${GITHUB_USER_NAME}`)
      .then(result => {
        setAvatarURL(result?.data.avatar_url)
      })
  }, [])

  return (
    <Box className={classes.root}>
      <Box className={classes.navBar}>
        <Container maxWidth="lg" className={classes.navContainer}>
          <Link className={classes.homeLink} to="/">
            <Box className={classes.avatarWrapper}>
              <Avatar
                alt="github profile image"
                src={avatarURL}
                className={classes.avatar}
                classes={{ img: classes.avatarImg }}
              />
              <StaticQuery
                query={siteMetaDataQueryDoc}
                render={data => (
                  <Box>
                    <Typography className={classes.title}>
                      {data.site.siteMetadata.title}
                    </Typography>
                    <Typography className={classes.description}>
                      {data.site.siteMetadata.description}
                    </Typography>
                  </Box>
                )}
              />
            </Box>
          </Link>

          <Box>
            <Link className={classes.linkItem} to="/">
              Home
            </Link>
            <Link className={classes.linkItem} to="/About/">
              About
            </Link>
            <Link className={classes.linkItem} to="/Categories/">
              Categories
            </Link>
            <Link className={classes.linkItem} to="/Tags/">
              Tags
            </Link>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export default PageLayout
