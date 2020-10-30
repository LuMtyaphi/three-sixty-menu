import React from "react"
import styled from "styled-components"

const Right = styled.div`
  height: 100%;
  width: 30%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  color: white;
  overflow-x: hidden;
`

const Sidebar = ({ children }) => <Right>{children}</Right>

export default Sidebar
