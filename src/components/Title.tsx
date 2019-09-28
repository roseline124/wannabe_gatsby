import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleWrapper = styled.div`
  position: absolute;
  top: 400px;
  text-align: center;
  color: white;
  height: 100vh;
`

const MainTitle = styled.h1`
  font-size: 3rem;
`

const Description = styled.p`
  font-weight: 300;
  margin-top: 15px;
  font-size: 1.5rem;
`

const Title = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  return (
    <TitleWrapper>
      <MainTitle>{siteMetadata.title}</MainTitle>{' '}
      <Description>{siteMetadata.description}</Description>
    </TitleWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <Title data={data} {...props} />}
  />
)

Title.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
