import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 5rem;
  width: 100%;
  padding: 0 2rem 0 2rem;

  display: flex;
  display: -ms-flexbox;
  align-items: center;
  -ms-flex-align: center;

  background-color: transparent;

  h1 {
    font-size: 1.5rem;
    color: white;
  }

  & > div {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto;
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-left: 1.5rem;
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default () => {
  return (
    <Header>
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
    </Header>
  )
}
