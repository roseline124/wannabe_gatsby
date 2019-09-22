import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  /* TODO: tranparent */
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.2);
`

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

const Item = styled.li`
  font-size: 15px;
  /* TODO: if first-li, then no margin */
  margin-left: 25px;
  color: gray;
`

const Link = styled.a`
  text-decoration: none;
`

export default () => {
  return (
    <Header>
      <List>
        {/* TODO: change URL to the router */}
        <Link href="#">
          <Item>Home</Item>
        </Link>

        <Item>Menu1</Item>
        <Item>Menu2</Item>
        <Item>Menu3</Item>
      </List>
    </Header>
  )
}
