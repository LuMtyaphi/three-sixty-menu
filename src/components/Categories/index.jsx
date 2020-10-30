import React, { useContext } from "react"
import ApplicationContext from "../../context/Application"
import styled from "styled-components"

import CategoryIcon from "./CategoryIcon"
import Logo from "../../Icons/Logo"
import Waiter from "../../Icons/Waiter"

const BlackButton = styled.button`
  width: 61px;
  height: 55px;
  background-color: #181818;
  color: white;
  font-size: 10px;
  &:hover {
    border: 1px solid orangered;
    background-color: black;
    color: orangered;
  }
  &:focus {
    border: 1px solid orangered;
    background-color: black;
    color: orangered;
  }
`
const OrangeButton = styled.button`
  width: 61px;
  height: 50px;
  border: none;
  background-color: orangered;
  color: white;
  font-size: 10px;
  &:hover {
    background-color: black;
    color: grey;
  }
  &:focus {
    background-color: black;
    color: black;
  }
`
const LogoDiv = styled.div`
  width: 61px;
  height: 55px;
  padding: 10px;
`

const Left = styled.div`
  height: 100%;
  width: 60px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
`

const Categories = () => {
  const { categories, setActiveCategory, activeCategory } = useContext(
    ApplicationContext
  )
  return (
    <Left>
      <LogoDiv>
        <Logo />
      </LogoDiv>

      {categories.map(category => (
        <BlackButton
          type="button"
          key={category.id}
          icon={category.icon}
          onClick={() => setActiveCategory(category)}
          disabled={!category.Products}
          style={{
            border: `1px solid ${
              category.id === activeCategory.id ? "white" : "transparent"
            }`,
          }}
        >
          <CategoryIcon name={category.icon} />
          {category.name}
        </BlackButton>
      ))}
      <OrangeButton>
        <Waiter />
        Waiter
      </OrangeButton>
    </Left>
  )
}

export default Categories
