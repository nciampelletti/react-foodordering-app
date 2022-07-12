import React from "react"
import styled from "styled-components"

const Input = React.forwardRef((props, ref) => {
  return (
    <Wrapper>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} ref={ref}></input>
    </Wrapper>
  )
})

export default Input

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`
