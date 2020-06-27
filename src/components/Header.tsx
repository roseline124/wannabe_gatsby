import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => {
  return (
    <>
      <Link to="/">
        <h1>Site Name</h1>
      </Link>
      <div>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/About/">About</ListLink>
          <ListLink to="/Categories/">Categories</ListLink>
          <ListLink to="/Tags/">Tags</ListLink>
        </ul>
      </div>
    </>
  )
}
