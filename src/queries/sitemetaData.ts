import { graphql } from 'gatsby'
export const siteMetaDataQueryDoc = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
