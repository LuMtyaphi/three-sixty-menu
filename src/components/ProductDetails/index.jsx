import React, { useContext, useState } from "react"
import ApplicationContext from "../../context/Application"
import styled from "styled-components"

const FImg = styled.img`
  width: 220px;
  height: 220px;
  padding-left: 50px;
`
const ProductName = styled.h2`
  text-align: center;
`
const ProductDescription = styled.p`
  text-align: center;
`
const OrderDiv = styled.div`
  transition: 0.5s;
  padding-bottom: 30px;
  background-color: black;
`
const Close = styled.button`
  background-color: black;
  color: white;
  width: 30px;
  height: 30px;
  border: none;
`

const AddBtn = styled.button`
  background-color: orangered;
  color: white;
  width: 30%;
  height: 40px;
  border: none;
  position: fixed;
  bottom: 0;
  right: 0;
`

const ProductDetails = () => {
  const [selectedOption, setSelectedOption] = useState({})
  const {
    activeProduct,
    setActiveProduct,
    activeCategory,
    addToOrders,
  } = useContext(ApplicationContext)

  if (!activeProduct?.name) {
    return null
  }
  return (
    <OrderDiv>
      <Close type="button" onClick={() => setActiveProduct({})}>
        X
      </Close>
      <br />

      {activeProduct?.images?.[0]?.thumbnails.large.url ? (
        <FImg
          src={activeProduct?.images?.[0]?.thumbnails.large.url}
          alt={activeProduct.name}
        />
      ) : (
        <div>should show placeholder using{activeCategory.icon}</div>
      )}
      <br />
      <ProductName>{activeProduct.name}</ProductName>
      <br />
      <ProductDescription>{activeProduct.description}</ProductDescription>
      {activeProduct.options ? (
        <div>
          {activeProduct.options.map(({ option, price }) => (
            <label htmlFor={option}>
              <input
                onChange={() => setSelectedOption({ option, price })}
                type="radio"
                class="radio-input"
                key={option}
                name="options"
                id={option}
                value={{ option, price }}
              />
              <label for={option}>
                {" "}
                {option} {price} <br></br>
              </label>
            </label>
          ))}
        </div>
      ) : null}
      <br />

      <br />
      <form>
        <label for="fname">SPECIAL INSTRUCTIONS</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="✏️ Add a note(e.g. no onions, extra source"
        ></input>
      </form>
      <AddBtn
        type="button"
        onClick={() => {
          addToOrders({ ...activeProduct, selectedOption })
          setActiveProduct({})
        }}
      >
        add to order
      </AddBtn>
    </OrderDiv>
  )
}

export default ProductDetails
