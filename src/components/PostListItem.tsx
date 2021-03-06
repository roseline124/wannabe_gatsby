import React, { FC } from 'react'
import { Box, Typography, Link } from '@material-ui/core'
import { SimpleImg } from 'react-simple-img'
import { makeStyles } from '@material-ui/core/styles'
import { graphql } from 'gatsby'

import { getEllipsisProps } from '../style/utils'
import { PostListItemFragment } from 'generated/graphql'

const useStyles = makeStyles(theme => {
  return {
    root: {
      padding: '30px 0',
      [theme.breakpoints.down('sm')]: {
        padding: '20px 0',
      },
    },
    link: {
      '&:hover': {
        textDecoration: 'none',
        color: '#999',
      },
    },
    title: {
      fontWeight: 500,
      lineHeight: '1.5em',
      letterSpacing: '-0.6px',
      fontSize: 20,
      marginBottom: 10,
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
      marginBottom: 25,
      minHeight: 120,
      ...getEllipsisProps(5),
      [theme.breakpoints.down('sm')]: {
        marginBottom: 10,
        minHeight: 30,
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
      maxHeight: 200,
      marginRight: 20,
      [theme.breakpoints.down('sm')]: {
        marginRight: 10,
        maxWidth: 100,
        maxHeight: 100,
      },
    },
    thumbnailImgae: {
      borderRadius: 5,
      '& img': { borderRadius: 5 },
    },
  }
})

interface PostListItemProps {
  post: PostListItemFragment
}

const PostListItem: FC<PostListItemProps> = ({ post }) => {
  const classes = useStyles()

  const category = post.frontmatter.category
  const slug = post.frontmatter.slug
  const path = `/${category || ''}/${slug}`
  return (
    <Box className={classes.root}>
      <Link href={path} underline="none" className={classes.link}>
        <Box display="flex">
          <Box className={classes.thumbnailWrapper}>
            <SimpleImg
              src={require(`../assets/${post.frontmatter.thumbnail}`)}
              width="100%"
              height="100%"
              className={classes.thumbnailImgae}
            />
          </Box>
          <Box className={classes.contentWrapper}>
            <Typography className={classes.title}>
              {post.frontmatter.title}
            </Typography>
            <Typography variant="body1" className={classes.content}>
              {post.excerpt}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.metaDataWrapper}>
          <Typography variant="body2">{post.frontmatter.date}</Typography>
          {post.frontmatter.category && (
            <Box display="flex">
              <Typography variant="body2" className={classes.inCategory}>
                In
              </Typography>
              <Typography variant="body2" className={classes.categoryName}>
                {post.frontmatter.category}
              </Typography>
            </Box>
          )}
        </Box>
      </Link>
    </Box>
  )
}

export default PostListItem

graphql`
  fragment PostListItem on MarkdownRemark {
    id
    excerpt(pruneLength: 700)
    frontmatter {
      date(formatString: "yyyy년 MM월 DD일")
      slug
      title
      category
      thumbnail
    }
    internal {
      content
    }
  }
`
