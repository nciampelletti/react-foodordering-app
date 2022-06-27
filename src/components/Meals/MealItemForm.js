import React from "react"
import styled from "styled-components"
import Input from "../UI/Input"
import { useRef, useState } from "react"

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = amountInputRef.current.value

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <Wrapper onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>please enter a valid amount (1-5)</p>}
    </Wrapper>
  )
}

export default MealItemForm

const Wrapper = styled.form`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`
