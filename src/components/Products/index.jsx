import React, { useContext } from "react"
import ApplicationContext from "../../context/Application"
import styled from "styled-components"

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`
const FoodSection = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  background-color: white;
  width: 200px;
  padding-left: 100px;
  color: black;
`
const Card = styled.div`
  display: grid;
  width: 250px;
  height: 154px;
  grid-template-columns: auto auto;
  position: relative;
  border: 2px solid #f2f2f2;
  border-radius: 10px;
  font-size: 10px;
  cursor: pointer;
`

const Img = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 6px;
`
const Header1 = styled.p`
  font-weight: bold;
  font-size: 12px;
`
const Header2 = styled.h5`
  color: orangered;
`
const Content = styled.div`
  padding: 10px;
`
const Truncate = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const RedButton = styled.button`
  background-color: orangered;
  color: white;
  border: white;
  font-size: 20px;
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 5px 0;
`

const Products = () => {
  const {
    categories,
    setActiveCategory,
    activeCategory,
    products,
    setActiveProduct,
  } = useContext(ApplicationContext)

  return (
    <FoodSection>
      <div>
        <Header2>Table 19</Header2>
        <h1>{activeCategory.name} Menu</h1>
      </div>
      <CardWrapper>
        {products
          .filter(product => product.category.includes(activeCategory.id))
          .map(product => (
            <Card
              onClick={() => setActiveProduct(product)}
              key={product.id}
              class="product"
            >
              <div>
                {product?.images?.[0]?.thumbnails.large.url ? (
                  <Img
                    src={product?.images?.[0]?.thumbnails.large.url}
                    alt={product.name}
                  />
                ) : (
                  <div>{activeCategory.icon}</div>
                )}
              </div>
              <Content>
                <Header1>{product.name}</Header1>
                <Truncate>{product.description}</Truncate>
                <Header1>R{product.unitCost}</Header1>
                <RedButton>+</RedButton>
              </Content>
            </Card>
          ))}
      </CardWrapper>
    </FoodSection>
  )
}
export default Products
