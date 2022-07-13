import React from "react"
import styled from "styled-components"
import Modal from "../UI/Modal"
import { useContext, useState } from "react"
import CartContext from "../../store/cart-context"
import CartItem from "./CartItem"
import Checkout from "./Checkout"

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const OrderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)

    await fetch(
      "https://react-http-eb12d-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    )

    setIsSubmitting(false)
    setDidSubmit(true)

    cartCtx.clearCart()
  }

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const ModalActions = () => {
    return (
      <div className='actions'>
        <button className='button--alt' onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className='button' onClick={OrderHandler}>
            Order
          </button>
        )}
      </div>
    )
  }

  const CartModalContent = () => {
    return (
      <>
        {cartItems}
        <div className='total'>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckout && (
          <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
        )}
        {!isCheckout && <ModalActions />}
      </>
    )
  }

  const IsSubmittingModalContent = () => {
    return <p>Sending order data ...</p>
  }

  const DidSubmitModalContent = () => {
    return (
      <>
        <p>Successfully sent the order ...</p>
        <div className='actions'>
          <button className='button' onClick={props.onClose}>
            Close
          </button>
        </div>
      </>
    )
  }

  return (
    <Modal onClose={props.onClose}>
      <Wrapper>
        {!isSubmitting && !didSubmit && <CartModalContent />}
        {isSubmitting && <IsSubmittingModalContent />}
        {!isSubmitting && didSubmit && <DidSubmitModalContent />}
      </Wrapper>
    </Modal>
  )
}

export default Cart

const Wrapper = styled.div`
  .cart-items {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .actions {
    text-align: right;
  }

  .actions button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  .actions button:hover,
  .actions button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  .actions .button--alt {
    color: #8a2b06;
  }

  .actions .button {
    background-color: #8a2b06;
    color: white;
  }
`
