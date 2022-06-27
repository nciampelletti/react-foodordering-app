import React from "react"

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: Number(existingCartItem.amount) + Number(action.item.amount),
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }

  if (action.type === "REMOVE") {
    //remove eitheir by one or the whole line item

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    )

    const existingCartItem = state.items[existingCartItemIndex]

    const updatedTotalAmount = state.totalAmount - existingCartItem.price

    let updatedItems

    if (existingCartItem.amount === 1) {
      //remove the entire item
      updatedItems = state.items.filter((item) => item.id !== action.id)
    } else {
      //keep item in the cart but decrease the amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      }

      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }

  return state
}

export default CartReducer
