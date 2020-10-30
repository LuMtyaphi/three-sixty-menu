import React, { useState, useEffect } from "react"
import Categories from "../components/Categories"
import Grid from "../components/Grid"
import Products from "../components/Products"
import Orders from "../components/Orders"
import Sidebar from "../components/Sidebar"
import ProductDetails from "../components/ProductDetails"
import ApplicationContext from "../context/Application"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState({})

  useEffect(() => {
    fetch("https://project-indie-api.netlify.app/.netlify/functions/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data.categories)
        setActiveCategory(
          data.categories.filter(category => category.Products)[0]
        )
      })
  }, [setCategories])

  const [products, setProducts] = useState([])
  const [activeProduct, setActiveProduct] = useState({})

  useEffect(
    () =>
      fetch("https://project-indie-api.netlify.app/.netlify/functions/products")
        .then(res => res.json())
        .then(data => setProducts(data.products)),

    [setProducts]
  )

  const [orders, setOrders] = useState([])

  const addToOrders = product => setOrders([...orders, product])

  const removeOrderAtIndex = index => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
  }

  // TODO: set up state for categories
  // TODO: set up useEffect and fetch categories
  // TODO: set up state for products
  // TODO: set up useEffect and fetch products
  // TODO: set up state for orders
  // TODO: set up utility functions to update states
  // TODO: set up context to share states across components
  return (
    <ApplicationContext.Provider
      value={{
        categories,
        activeCategory,
        setActiveCategory,
        products,
        activeProduct,
        setActiveProduct,
        orders,
        addToOrders,
        removeOrderAtIndex,
      }}
    >
      {/*<pre>{JSON.stringify(activeProduct, null, 2)}</pre>*/}
      <Grid>
        <Categories />
        <Products />
        <Sidebar>
          <ProductDetails />
          <hr />
          <Orders />
        </Sidebar>
      </Grid>
    </ApplicationContext.Provider>
  )
}
