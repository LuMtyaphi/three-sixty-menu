import PropTypes from "prop-types"
import React from "react"
import DESSERT from "../../Icons/Dessert"
import DRINK from "../../Icons/Drink"
import PANINI from "../../Icons/Panini"
import PASTA from "../../Icons/Pasta"
import PIZZA from "../../Icons/Pizza"
import SALAD from "../../Icons/Salad"
import STARTER from "../../Icons/Starter"
import Waiter from "../../Icons/Waiter"

const icons = {
  DESSERT,
  DRINK,
  PANINI,
  PASTA,
  PIZZA,
  SALAD,
  STARTER,
  Waiter,
}
const CategoryIcon = ({ name }) => (
  <div>{icons[name] ? icons[name]() : null} </div>
)
CategoryIcon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)),
}
export default CategoryIcon
