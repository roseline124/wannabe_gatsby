import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { SimpleImg } from 'react-simple-img'
import { makeStyles } from '@material-ui/core/styles'
import { graphql } from 'gatsby'

import { getEllipsisProps } from '../style/utils'
import { PostListItemFragment } from 'generated/graphql'
import thumbnail from '../assets/images/flutter-water-dashboard.png'

const useStyles = makeStyles(theme => {
  return {
    root: {
      padding: '20px 0',
    },
    title: {
      marginBottom: 10,
      fontSize: 20,
      ...getEllipsisProps(1),
      [theme.breakpoints.down('sm')]: {
        marginBottom: 5,
        fontSize: 18,
      },
    },
    metaDataWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    contentWrapper: {
      width: '100%',
    },
    content: {
      marginBottom: 10,
      ...getEllipsisProps(5),
      [theme.breakpoints.down('sm')]: {
        ...getEllipsisProps(3),
        lineHeight: '1.4em',
      },
    },
    inCategory: {
      marginRight: 5,
    },
    categoryName: {
      color: theme.palette.primary.main,
    },
    thumbnailWrapper: {
      maxWidth: 200,
      width: '100%',
      height: '100%',
      marginRight: 20,
      [theme.breakpoints.down('sm')]: {
        marginRight: 10,
        maxWidth: 100,
      },
    },
    thumbnailImgae: {
      borderRadius: 5,
      maxHeight: 200,
      height: '100%',
      '& img': { borderRadius: 5 },
      [theme.breakpoints.down('sm')]: {
        maxHeight: 100,
      },
    },
  }
})

interface PostListItemProps {
  post: PostListItemFragment
}

const PostListItem: FC<PostListItemProps> = ({ post }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box display="flex">
        <Box className={classes.thumbnailWrapper}>
          <SimpleImg
            src={thumbnail}
            width="100%"
            height="100%"
            className={classes.thumbnailImgae}
          />
        </Box>
        <Box className={classes.contentWrapper}>
          <Typography variant="h1" className={classes.title}>
            {post.frontmatter.title}
          </Typography>
          <Typography variant="body1" className={classes.content}>
            {post.excerpt}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.metaDataWrapper}>
        <Typography variant="body2">2020. 06. 28. 12:00</Typography>
        <Box display="flex">
          <Typography variant="body2" className={classes.inCategory}>
            In
          </Typography>
          <Typography variant="body2" className={classes.categoryName}>
            category name
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PostListItem

graphql`
  fragment PostListItem on MarkdownRemark {
    id
    excerpt(pruneLength: 700)
    frontmatter {
      date
      slug
      title
    }
    internal {
      type
    }
  }
`
