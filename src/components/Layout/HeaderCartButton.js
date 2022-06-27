import React, { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import styled from "styled-components"
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext)
  const numberofCartItems = cartContext.items.reduce((currentNumber, item) => {
    return Number(currentNumber) + Number(item.amount)
  }, 0)

  return (
    <Button onClick={props.onClick}>
      <span>
        <CartIcon className='icon' />
      </span>
      <span>Your cart</span>
      <span className='badge'>{numberofCartItems}</span>
    </Button>
  )
}

export default HeaderCartButton

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  .icon {
    display: inline;
    width: 1rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  &:hover .badge,
  &:active .badge {
    background-color: #92320c;
  }

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`
