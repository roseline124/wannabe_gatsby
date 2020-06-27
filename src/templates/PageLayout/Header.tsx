import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Avatar,
  Box,
  Container,
  Typography,
  Hidden,
  IconButton,
  Menu,
  MenuProps,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import { SiteSiteMetadata } from '../../generated/graphql'
import { GITHUB_USER_NAME } from '../../config'
import {
  title as defaultTitle,
  description as defaultDescription,
} from '../../constants/metadata'

const useStyles = makeStyles(theme => {
  return {
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
      border: '1px solid #e8e8e8',
    },
    avatarWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    description: {
      fontSize: 16,
    },
    menuIcon: {
      color: '#333',
    },
  }
})

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: '#eee',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

interface HeaderProps {
  siteMetadata?: SiteSiteMetadata
}

const Header = (props: HeaderProps) => {
  const { siteMetadata } = props
  const classes = useStyles()
  const [avatarURL, setAvatarURL] = useState(null)

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${GITHUB_USER_NAME}`)
      .then(result => {
        setAvatarURL(result?.data.avatar_url)
      })
  }, [])

  return (
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
            <Box>
              <Typography className={classes.title}>
                {siteMetadata?.title || defaultTitle}
              </Typography>
              <Hidden smDown>
                <Typography className={classes.description}>
                  {siteMetadata?.description || defaultDescription}
                </Typography>
              </Hidden>
            </Box>
          </Box>
        </Link>

        <Box>
          <Hidden smDown>
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
          </Hidden>

          <Hidden mdUp>
            <IconButton
              component="span"
              onClick={handleClick}
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <StyledMenu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <Link className={classes.linkItem} to="/">
                  Home
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link className={classes.linkItem} to="/About/">
                  About
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link className={classes.linkItem} to="/Categories/">
                  Categories
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link className={classes.linkItem} to="/Tags/">
                  Tags
                </Link>
              </StyledMenuItem>
            </StyledMenu>
          </Hidden>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
