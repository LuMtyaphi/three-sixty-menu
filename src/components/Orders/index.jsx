import React, { useContext } from "react"
import ApplicationContext from "../../context/Application"
import styled from "styled-components"

const RedDiv = styled.div`
  background-color: orangered;
  width: 10%;
  color: white;
  height: 40px;
  bottom: 0;
  right: 0;
  font-size: 2px;
  position: fixed;
`
const Total = styled.h3`
  font-size: 12px;
  text-align: center;
  padding-top: 15%;
`

const Orders = () => {
  const {
    orders,
    addToOrders,
    removeOrderAtIndex,
    setActiveProduct,
  } = useContext(ApplicationContext)
  let totalCost = (totalCost = 0)

  orders.forEach(order => {
    totalCost = totalCost + order.unitCost
  })

  return (
    <div>
      <h5>Order Summery</h5>
      {orders.map((order, index) => (
        <div key={`order_${order.id}`}>
          {order.name} R{order.unitCost} &bull; {order.selectedOption?.option}
          <button type="button" onClick={() => removeOrderAtIndex(index)}>
            🗑
          </button>
          <button type="button" onClick={() => addToOrders(order)}>
            🔁
          </button>
          <br />
          <button type="button" onClick={() => setActiveProduct(order)}>
            ✏️
          </button>
        </div>
      ))}

      <RedDiv className="total">
        <Total> R{totalCost}</Total>
      </RedDiv>
    </div>
  )
}

export default Orders
