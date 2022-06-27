import React from "react"
import styled from "styled-components"
import MealItemForm from "./MealItemForm"
import { useContext } from "react"
import CartContext from "../../store/cart-context"

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  const cartContext = useContext(CartContext)

  const onAddToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }

  return (
    <Wrapper>
      <div>
        <h3>{props.name}</h3>
        <div className='description'>{props.description}</div>
        <div className='price'>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </Wrapper>
  )
}

export default MealItem

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;0
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }

  .description {
    font-style: italic;
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`
