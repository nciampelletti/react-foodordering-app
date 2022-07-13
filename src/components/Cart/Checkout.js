import React from "react"
import styled from "styled-components"
import { useRef, useState } from "react"

const isEmpty = (value) => value.trim() === ""

const Checkout = (props) => {
  const nameInput = useRef()
  const streetInput = useRef()
  const postalInput = useRef()
  const cityInput = useRef()

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  })

  const ConfirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInput.current.value
    const enteredStreet = streetInput.current.value
    const enteredPostal = postalInput.current.value
    const enteredCity = cityInput.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalIsValid = !isEmpty(enteredPostal)
    const enteredCityIsValid = !isEmpty(enteredCity)

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid

    if (!formIsValid) {
      return
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
    })
  }

  return (
    <Wrapper onSubmit={ConfirmHandler}>
      <div className={`control ${!formInputValidity.name ? "invalid" : ""}`}>
        <label htmlFor='name'>Your Name</label>
        <input id='name' type='text' ref={nameInput}></input>
        {!formInputValidity.name && <p>Please enter valid name</p>}
      </div>
      <div className={`control ${!formInputValidity.street ? "invalid" : ""}`}>
        <label htmlFor='street'>Street</label>
        <input id='street' type='text' ref={streetInput}></input>
        {!formInputValidity.street && <p>Please enter valid street</p>}
      </div>
      <div className={`control ${!formInputValidity.postal ? "invalid" : ""}`}>
        <label htmlFor='postal'>Postal code</label>
        <input id='postal' type='text' ref={postalInput}></input>
        {!formInputValidity.postal && <p>Please enter valid postal</p>}
      </div>
      <div className={`control ${!formInputValidity.city ? "invalid" : ""}`}>
        <label htmlFor='city'>City</label>
        <input id='city' type='text' ref={cityInput}></input>
        {!formInputValidity.city && <p>Please enter valid city</p>}
      </div>
      <div className='actions'>
        <button>Confirm</button>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </Wrapper>
  )
}

export default Checkout

const Wrapper = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;

  .control {
    margin-bottom: 0.5rem;
  }

  .control label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  .control input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .actions button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;
  }

  .actions button:hover,
  .actions button:active {
    background-color: #ffe6dc;
  }

  .actions .submit {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;
  }

  .actions .submit:hover,
  .actions .submit:active {
    background-color: #7a2706;
  }

  .invalid label {
    color: #ca3e51;
  }

  .invalid input {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
`
