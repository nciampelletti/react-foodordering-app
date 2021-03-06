import React from "react"
import CartContext from "./cart-context"
import { useReducer } from "react"
import CartReducer from "./cart-reducer"

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  )

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item })
  }
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id })
  }

  const clearCartHandler = (id) => {
    dispatchCartAction({ type: "CLEAR" })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
