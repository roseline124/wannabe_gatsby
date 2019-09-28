import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  padding: 20px;
  background-color: transparent;
`

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  margin-left: 25px;
  color: white;
`

export default () => {
  return (
    <Header>
      <List>
        {/* TODO: change URL to the router */}
        {/* TODO2: mobile version */}
        <Item>
          <a href="#Home">Home</a>
        </Item>
        <Item>
          <a href="#About">About</a>
        </Item>
        <Item>
          <a href="#Posts">Posts</a>
        </Item>
        <Item>
          <a href="#Tag">Tag</a>
        </Item>
      </List>
    </Header>
  )
}
