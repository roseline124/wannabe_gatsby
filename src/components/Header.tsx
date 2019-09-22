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
  /* background-color: #f0f0f0; */
  /* box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.2); */
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
        <Item>Home</Item>
        <Item>Menu1</Item>
        <Item>Menu2</Item>
        <Item>Menu3</Item>
      </List>
    </Header>
  )
}
